import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import SearchBar from './search_bar';
import { searchListings } from '../../actions/listing_actions';

const mSTP = state => ({
  errors: state.errors.booking
})

const mDTP = dispatch => ({
  searchListings: (query) => dispatch(searchListings(query)),
})

export default connect(
  mSTP,
  mDTP
)(withRouter(SearchBar));
