
const defaultStore = {
    id: 0,
    notesList: []
}

export default function StickerNotes(state = defaultStore, action) {
    switch (action.type) {
		case 'ADD_NOTES':
			const newNote = {
				id: state.id,
				title: 'Untitled',
				description: 'Enter here ...'
			}
			return {
				id: state.id + 1,
				notesList: [...state.notesList, newNote]
			}
		case 'UPDATE_TITLE':
			return Object.assign({}, state, {
				notesList: state.notesList.map(note => {
					if (note.id === action.payload.id){
						return {
							id: note.id,
							title: action.payload.title,
							description: note.description
						}
					}
					return note
				})
			})
		case 'UPDATE_DESCRIPTION':
			return Object.assign({}, state, {
				notesList: state.notesList.map(note => {
					if (note.id === action.payload.id){
						return {
							id: note.id,
							title: note.title,
							description: action.payload.description
						}
					}
					return note
				})
			})
		default:
			return state
    }
}