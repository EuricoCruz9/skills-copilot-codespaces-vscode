// Create web server
// Create Express app
const express = require('express');
const app = express();
const port = 3000;

// Enable CORS
const cors = require('cors');
app.use(cors());

// Enable JSON body parsing
app.use(express.json());

// Serve static files from the public directory
app.use(express.static('public'));

// Serve index.html on the root path
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// In-memory storage for comments
let comments = [];

// API endpoint to get all comments
app.get('/api/comments', (req, res) => {
  res.json(comments);
});

// API endpoint to add a new comment
app.post('/api/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.status(201).json(comment);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});