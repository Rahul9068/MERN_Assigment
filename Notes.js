// src/components/Notes.js
import React, { useState, useEffect } from 'react';
import './Notes.css';

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Fetch user's notes and update the 'notes' state
  }, []);

  // Implement note creation, deletion, and editing logic here

  return (
    <>
    <div className='container'>
      <h2>Notes</h2>
      <ul>
        {notes.map((note) => (
          <li key={note._id}>
            <h3>{note.title}</h3>
            <p>{note.description}</p>
            {/* Add edit and delete buttons */}
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default Notes;
