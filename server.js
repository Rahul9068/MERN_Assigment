// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/noteapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // usecreateIndex: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/note'));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
