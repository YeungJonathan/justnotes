import React from 'react';
import '../styles/StickerNotes.css';


class StickerNoteItem extends React.Component{
    constructor(props){
		super(props);
		this.state = {
			dragging: false,
			xOffset: 0,
			yOffset: 0,
		}
	}

	mouseDown() {
		const {note, x, y} = this.props;
		const xOffset = x - note.left;
		const yOffset = y - note.top;
		this.setState({dragging: true, xOffset, yOffset});
	}

	mouseUp() {
		const {note, x, y, updateLocation} = this.props;
		const {xOffset, yOffset} = this.state;
		updateLocation(note.id, x - xOffset, y - yOffset);
		this.setState({dragging: false});
	}

    render(){
		const {note, descriptionChange, titleChange, x, y, deleteNote} = this.props;
		const { dragging, xOffset, yOffset } = this.state;
		const nonDraggingStyle = {left:note.left, top:note.top};
		const draggingStyle = {left: x - xOffset, top: y - yOffset};
        return(
			<div 
				key={note.id} 
				className="NotesContainer"
				style={dragging?draggingStyle:nonDraggingStyle}
			>
				<div
					className="top-tab"
					onMouseDown = {() => this.mouseDown()}
					onMouseUp = {() => this.mouseUp()}
				>
					<div 
						className="cross"
						onMouseDown={() => deleteNote(note.id)}
						/>
				</div>
                <input 
                    type="text" 
                    className="title input-field" 
                    value={note.title} 
                    onChange={e => titleChange(note.id, e.target.value)}
                />
                <textarea 
                    type="text" 
                    className="description input-field" 
                    value={note.description} 
                    onChange={e => descriptionChange(note.id, e.target.value)} 
                />
            </div>
        )
    }
}

export default StickerNoteItem;