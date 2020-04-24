import React from 'react';
import '../styles/StickyNotes.css';

const StickerNotes = ({notesList}) => {
  return (
    <>
        {notesList.map(note => (
            <div key={note.id} className="NotesContainer" >
                <input type="text" className="title" value={note.title}/>
                <p className="description">
                    {note.description}
                </p>
            </div>
        )
        )}
    </>
  );
}

export default StickerNotes;
