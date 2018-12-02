import { connect } from 'react-redux';
import { fetchListing } from '../../actions/listing_actions';
import { login } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import ListingShow from './listing_show';

const mSTP = (state, ownProps) => ({
  listing: state.entities.listings[ownProps.match.params.listingId],
  listingPhotos: Object.values(state.entities.listingPhotos),
  currentUser: state.session.id,
  numReviews: state.entities.reviews.length
});

const mDTP = dispatch => ({
  fetchListing: id => dispatch(fetchListing(id)),
  login: user => dispatch(login(user)),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(
  mSTP,
  mDTP
)(ListingShow);
