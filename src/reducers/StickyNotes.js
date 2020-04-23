
const defaultStore = {
    id: 0,
    notesList: []
}

export default function StickyNotes(state = defaultStore, action) {
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
      default:
        return state
    }
}