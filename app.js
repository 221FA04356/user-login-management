const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const bcrypt = require('bcrypt');
const path = require('path');
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/user_management');

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

// User model (for 'datausers' collection)
const User = mongoose.model('User', {
  username: String,
  password: String
}, 'datausers'); 


// Routes
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (user && await bcrypt.compare(password, user.password)) {
    req.session.userId = user._id;
    res.redirect('/dashboard');
  } else {
    res.redirect('/login');
  }
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const existingUser = await User.findOne({ username });

  if (existingUser) {
    // If the user exists, redirect with an error query string
    return res.redirect('/register?error=user_exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword });
  await user.save();
  
  res.redirect('/login');
});


app.get('/dashboard', (req, res) => {
  if (req.session.userId) {
    res.render('dashboard');
  } else {
    res.redirect('/login');
  }
});

// Route to display all user data from 'datausers' collection
app.get('/userdata', async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from 'datausers' collection
    res.render('userdata', { users }); // Pass the fetched data to the EJS view
  } catch (error) {
    res.status(500).send('Error fetching user data');
  }
});



app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});