
import StickerNotes from '../components/StickerNotes';
import { connect } from 'react-redux';
import { updateTitle, updateDescription, updateStickerNoteLocation } from '../actions/StickerNotes';

const getDisplayNotes = (notesList) => {
    return notesList
}

const mapStateToProps = (state, ownProp) => ({
  notesList: getDisplayNotes(state.StickerNotes.notesList),
  x: ownProp.x,
  y: ownProp.y,
})

const mapDispatchToProps = dispatch => ({
  titleChange: (id, text) => dispatch(updateTitle(id, text)),
  descriptionChange: (id, text) => dispatch(updateDescription(id, text)),
  updateLocation: (id, x, y) => dispatch(updateStickerNoteLocation(id, x, y))
})

export default connect(mapStateToProps, mapDispatchToProps)(StickerNotes)