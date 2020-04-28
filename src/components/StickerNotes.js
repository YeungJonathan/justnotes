import React from 'react';
import '../styles/StickerNotes.css';
import StickerNoteItem from './StickerNoteItem';

const StickerNotes = ({x, y, notesList, titleChange, descriptionChange, updateLocation, deleteNote}) => {
  return (
    <>
        {notesList.map(note => (
          <StickerNoteItem 
            key={note.id}
            note={note} 
            titleChange={titleChange} 
            descriptionChange={descriptionChange}
            updateLocation={updateLocation}
            deleteNote={deleteNote}
            x={x}
            y={y}
          />
        )
        )}
    </>
  );
}

export default StickerNotes;
