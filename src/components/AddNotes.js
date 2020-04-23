import React from 'react';
import '../styles/AddNotes.css';

function AddNotes({onClickAddNotes}) {
  return (
    <div className="AddNotesContainer" onClick={() => onClickAddNotes()}>
        <p className="ButtonText">
            +
        </p>
    </div>
  );
}

export default AddNotes;
