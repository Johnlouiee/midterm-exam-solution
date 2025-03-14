// Import the required modules
const express = require('express'); 
const { Sequelize, DataTypes } = require('sequelize'); 


const app = express();

// Set up Sequelize to connect to the database
const sequelize = new Sequelize('your_database_name', 'your_username', 'your_password', {
  host: 'localhost', 
  dialect: 'mysql'   
});

// Define a simple User model (table)
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, 
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false, 
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false, 
    unique: true,     
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'active', 
  },
});

// Check database connection and sync
sequelize.sync().then(() => {
  console.log('Connected to the database and table is ready!');
}).catch(err => {
  console.log('Database connection failed:', err);
});

// Define the /users route
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll(); 
    res.json(users); 
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users' }); 
  }
});


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
