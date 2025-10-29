// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Set EJS as template engine
app.set('view engine', 'ejs');

// Route: Home/Login Page
app.get('/', (req, res) => {
  res.render('login'); // Renders login.ejs
});

// Route: Handle Form Submission
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Simple validation logic
  if (username === 'admin' && password === '1234') {
    res.render('success', { user: username });
  } else {
    res.send('<h2>Invalid Credentials. Please try again!</h2>');
  }
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
