import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import SearchBar from './search_bar';
import { receiveErrors } from '../../actions/booking_actions';

const mSTP = state => ({
  errors: state.errors.booking
})

const mDTP = dispatch => ({
  clearErrors: () => dispatch(receiveErrors([])),
})

export default connect(
  mSTP,
  mDTP
)(withRouter(SearchBar));
