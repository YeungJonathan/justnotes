
const defaultStore = {
    id: 0,
    notesList: []
}

const addNotes = (state) => {
	const offSet = state.id * 5;
	const newNote = {
		id: state.id,
		title: 'Untitled',
		description: 'Enter here ...',
		left: 150 + offSet,
		top: 150 + offSet,
	}
	return {
		id: state.id + 1,
		notesList: [...state.notesList, newNote]
	}
}

const updateDetails = (state, action) => {
	return Object.assign({}, state, {
		notesList: state.notesList.map(note => {
			if (note.id === action.payload.id){

				switch(action.type){
					case 'UPDATE_TITLE':
						const { title } = action.payload;
						return {...note, title}
					case 'UPDATE_DESCRIPTION':
						const { description } = action.payload;
						return {...note, description}
					case 'UPDATE_LOCATION':
						const { x: left, y: top } = action.payload;
						return {...note, left, top}
					default:
						return note
				}	
			}
			return note
		})
	})
}

export default function StickerNotes(state = defaultStore, action) {
    switch (action.type) {
		case 'ADD_NOTES':
			return addNotes(state)
		case 'UPDATE_TITLE':
		case 'UPDATE_DESCRIPTION':
		case 'UPDATE_LOCATION':
			return updateDetails(state, action)
		case 'DELETE_NOTE':
			const filteredNotes = state.notesList.filter(note => note.id !== action.payload.id);
			return {
				id: state.id,				
				notesList: filteredNotes
			}
		default:
			return state
    }
}