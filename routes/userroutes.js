// Route to display all user data
app.get('/datausers', async (req, res) => {
    try {
      const users = await User.find(); // Fetch all users from the database
      res.render('datausers', { datausers }); // Pass users data to the template
    } catch (error) {
      res.status(500).send('Error fetching user data');
    }
  });
  