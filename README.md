# User Management System

This is a User Management System built using ExpressJS and MongoDB. It provides user registration, login, and dashboard features with seamless navigation.

## Project Structure

The project contains the following main components:

1. Home Page: The landing page of the application.
2. Registration Page: Allows new users to register by providing their information.
3. Login Page: Existing users can log in using their credentials.
4. Dashboard: Displays user-specific information upon successful login.

## Dependencies:

1. ExpressJS
2. Mongoose (for MongoDB interaction)
3. EJS (for templating)
4. dotenv (for environment variables)
5. bcryptjs (for password hashing)


## Features

- Registration: Users can sign up by filling out a registration form. On successful registration, they are redirected to the login page.
- Login: Users can log in with their credentials. After successful login, they are redirected to the dashboard.
- Dashboard: Displays user-specific details or a welcome message.

## Prerequisites

Ensure you have the following installed:

- Node.js
- MongoDB

## Getting Started

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/user-management-system.git
   cd user-management-system
2. Install Dependencies:

    ```bash
    npm install

3. Set up the database

Make sure MongoDB is installed and running on your local machine.
Create a new database called user_management and a collection named datausers. You can use the following commands in the MongoDB shell:

         use user_management
         db.createCollection("datausers")
         
4. Configure environment variables

Create a .env file in the root directory of your project and add the following configuration:

        PORT=3000
        MONGO_URI=mongodb://localhost:27017/user_management
        
5. Run the application
   ```bash
   npm start
6. Access the application

Open your browser and navigate to http://localhost:3000. The home page should be displayed.





