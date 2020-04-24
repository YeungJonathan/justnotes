import React from 'react';
import '../styles/StickerNotes.css';

const StickerNotes = ({notesList, titleChange, descriptionChange}) => {
  return (
    <>
        {notesList.map(note => (
            <div key={note.id} className="NotesContainer" >
                <input type="text" className="title input-field" value={note.title} onChange={e => titleChange(note.id, e.target.value)}/>
                <textarea type="text" className="description input-field" value={note.description} onChange={e => descriptionChange(note.id, e.target.value)} />
            </div>
        )
        )}
    </>
  );
}

export default StickerNotes;
