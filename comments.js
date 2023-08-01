// create web server
// node comments.js
// http://localhost:8080
// http://localhost:8080/comments
// http://localhost:8080/comments/1

// create web server
const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

const server = http.createServer(function (req, res) {
  // get the path name
  const pathname = url.parse(req.url).pathname;
  // get the file extension
  const extname = path.extname(pathname);
  // get the file type
  const type = getContentType(extname);
  // get the file path
  const filepath = path.join(__dirname, pathname);
  // get the file content
  fs.readFile(filepath, function (err, data) {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('File not found');
    } else {
      res.writeHead(200, { 'Content-Type': type });
      res.end(data);
    }
  });
});

// start web server
server.listen(8080, function () {
  console.log('Server is running on port 8080');
});

// get the file type
function getContentType(extname) {
  switch (extname) {
    case '.html':
      return 'text/html';
    case '.css':
      return 'text/css';
    case '.js':
      return 'text/javascript';
    default:
      return 'text/plain';
  }
} 
