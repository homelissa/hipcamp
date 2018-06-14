import { combineReducers } from 'redux';
import modal from './modal_reducer';
import filtersReducer from './filter_reducers';

export default combineReducers({
  modal: modal,
  filters: filtersReducer
});
