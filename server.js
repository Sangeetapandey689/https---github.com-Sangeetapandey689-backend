const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');


const app = express();
const port = 3001;

// MySQL connection configuration
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Geeta@6204',
  database: 'my_database',
});

// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Middleware for parsing JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, etc.)
app.use(express.static('public'));

// Handle signup form POST requests
app.post('/signup', (req, res) => {
  const userData = req.body;

  // Insert user data into the MySQL database
  db.query('INSERT INTO users SET ?', userData, (err, result) => {
    if (err) {
      console.error('Error inserting data into MySQL:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    console.log('User data inserted into MySQL');
    res.status(200).json({ message: 'Signup successful' });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
