import { connect } from 'react-redux';

import { logout, login } from '../../actions/session_actions';
import Greeting from './greeting';
import { openModal } from '../../actions/modal_actions';

const mSTP = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id],
    demoUser: {
      email_address: 'seedemail',
      first_name: 'Beyonce',
      last_name: 'Knowles',
      password: 'password'
    }
  };
};

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user)),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(
  mSTP,
  mDTP
)(Greeting);
