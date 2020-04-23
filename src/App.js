import React from 'react';
import './App.css';
import StickerNotesContainer from './containers/StickerNotesContainer';
import AddNotesContainer from './containers/AddNotesContainer';

function App() {
  return (
    <div className="App">
      <StickerNotesContainer/>
      <AddNotesContainer />
    </div>
  );
}

export default App;
