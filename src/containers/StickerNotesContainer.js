
import StickerNotes from '../components/StickerNotes';
import { connect } from 'react-redux';
import { updateTitle, updateDescription } from '../actions/StickerNotes';

const getDisplayNotes = (notesList) => {
    console.log(notesList)
    return notesList
}

const mapStateToProps = state => ({
  notesList: getDisplayNotes(state.StickerNotes.notesList)
})

const mapDispatchToProps = dispatch => ({
  titleChange: (id, text) => dispatch(updateTitle(id, text)),
  descriptionChange: (id, text) => dispatch(updateDescription(id, text))
})

export default connect(mapStateToProps, mapDispatchToProps)(StickerNotes)