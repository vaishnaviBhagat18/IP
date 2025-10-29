// Import built-in http module
const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
  res.end('<h1>Hello, World!</h1><p>This is a simple Node.js web server.</p>');
});

// Start listening on the defined port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
