const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Middleware to parse JSON-encoded and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create a MySQL connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'tour360'
});

// API endpoint to handle signup requests
app.post('/signup', (req, res) => {
  // Extract user data from the request
  const { email, password, phoneNumber } = req.body;

  // Insert user data into the database
  pool.query('INSERT INTO users (email, password, telephone) VALUES (?, ?, ?)', [email, password, phoneNumber], (err, result) => {
    if (err) {
      console.error('Error signing up:', err);
      res.status(500).json({ error: 'An error occurred while signing up' });
    } else {
      console.log('User signed up successfully');
      res.status(200).json({ message: 'User signed up successfully' });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
