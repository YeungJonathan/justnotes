import React from 'react';

const StickerNotes = ({notesList}) => {
  return (
    <>
        {notesList.map(note => (
            <div key={note.id} style={{height:'400px', width:'250px', backgroundColor: 'lightblue'}}>
                <h3>
                    {note.title}
                </h3>
                <p>
                    {note.description}
                </p>
            </div>
        )
        )}
    </>
  );
}

export default StickerNotes;
