const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const mysql = require('mysql2');
const { v4: uuidv4 } = require('uuid');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // your MySQL username
    password: '@anu', // your MySQL password
    database: 'comments_system'
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('MySQL connection error:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// POST /api/login: Accept a username and return a session ID
app.post('/api/login', (req, res) => {
    const { username } = req.body;
    if (!username) {
        return res.status(400).json({ message: 'Username is required' });
    }
    const sessionId = uuidv4(); // Generate a unique session ID
    res.json({ sessionId });
});

// GET /api/comments: Fetch the list of comments from the MySQL database
app.get('/api/comments', (req, res) => {
    db.query('SELECT * FROM comments', (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching comments' });
        }
        res.json(results);
    });
});
// DELETE /api/comments: Delete all comments from the MySQL database
app.delete('/api/comments', (req, res) => {
  db.query('DELETE FROM comments', (err, results) => {
      if (err) {
          return res.status(500).json({ message: 'Error deleting comments' });
      }
      io.emit('commentsDeleted'); // Notify all connected clients that comments have been deleted
      res.json({ message: 'All comments deleted' });
  });
});

// POST /api/comments: Accept a comment and store it in the MySQL database
app.post('/api/comments', (req, res) => {
    const { username, comment } = req.body;
    if (!username || !comment) {
        return res.status(400).json({ message: 'Username and comment are required' });
    }
    db.query('INSERT INTO comments (username, comment) VALUES (?, ?)', [username, comment], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Error saving comment' });
        }
        const newComment = { id: results.insertId, username, comment };
        io.emit('newComment', newComment); // Broadcast the new comment to all connected clients
        res.status(201).json(newComment);
    });
});

// Socket.IO logic
io.on('connection', (socket) => {
    console.log('A user connected');
    
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
