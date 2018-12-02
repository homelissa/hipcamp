import { connect } from 'react-redux';
import Search from './search';
import { updateFilter } from '../../actions/filter_actions';

const mSTP = state => ({
  listings: Object.values(state.entities.listings)
});

const mDTP = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});


export default connect(
  mSTP,
  mDTP
)(Search);
