// Import Express module
const express = require('express');

// Create an Express application
const app = express();

// Define a port number
const PORT = 3000;

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello from Node.js Express Server!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
