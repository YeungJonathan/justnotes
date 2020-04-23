
import AddNotes from '../components/AddNotes';
import { connect } from 'react-redux';
import { addNotes } from '../actions/StickerNotes';

const mapDispatchToProps = dispatch => ({
  onClickAddNotes: _ => dispatch(addNotes())

})

export default connect(null, mapDispatchToProps)(AddNotes)