import React from 'react';
import '../styles/StickerNotes.css';
import StickerNoteItem from './StickerNoteItem';

const StickerNotes = ({x, y, notesList, titleChange, descriptionChange, updateLocation}) => {
  return (
    <>
        {notesList.map(note => (
          <StickerNoteItem 
            key={note.id}
            note={note} 
            titleChange={titleChange} 
            descriptionChange={descriptionChange}
            updateLocation={updateLocation}
            x={x}
            y={y}
          />
        )
        )}
    </>
  );
}

export default StickerNotes;
