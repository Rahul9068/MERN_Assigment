// routes/notes.js

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Note = require('../models/Note');

// Create a new note
router.post('/', auth, async (req, res) => {
  try {
    const { title, description } = req.body;
    const userId = req.user;

    const note = new Note({
      title,
      description,
      user: userId,
    });

    await note.save();
    res.status(201).json(note);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all notes of the logged-in user
router.get('/', auth, async (req, res) => {
  try {
    const userId = req.user;
    const notes = await Note.find({ user: userId }).sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get a single note by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.status(200).json(note);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update a note by ID
router.put('/:id', auth, async (req, res) => {
  try {
    const { title, description } = req.body;
    const noteId = req.params.id;

    const note = await Note.findByIdAndUpdate(
      noteId,
      { title, description },
      { new: true }
    );

    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    res.status(200).json(note);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete a note by ID
router.delete('/:id', auth, async (req, res) => {
  try {
    const noteId = req.params.id;

    const note = await Note.findByIdAndDelete(noteId);
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
