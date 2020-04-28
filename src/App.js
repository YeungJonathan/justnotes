import React, {useState} from 'react';
import './App.css';
import StickerNotesContainer from './containers/StickerNotesContainer';
import AddNotesContainer from './containers/AddNotesContainer';

function App() { 
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const mouseMove = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  }
  return (
    <div 
      className="App" 				
      onMouseMove={(e) => mouseMove(e)}
    >
      <StickerNotesContainer x={x} y={y}/>
      <AddNotesContainer/>
    </div>
  );
}

export default App;
