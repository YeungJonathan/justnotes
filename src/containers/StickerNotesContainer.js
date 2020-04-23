
import StickerNotes from '../components/StickerNotes';
import { connect } from 'react-redux';

const getDisplayNotes = (notesList) => {
    console.log(notesList)
    return notesList
}

const mapStateToProps = state => ({
  notesList: getDisplayNotes(state.StickyNotes.notesList)
})

// const mapDispatchToProps = dispatch => ({
//   toggleTodo: id => dispatch(toggleTodo(id))
// })

export default connect(mapStateToProps)(StickerNotes)