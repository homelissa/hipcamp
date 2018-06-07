import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, receiveErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';


const mSTP = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'login',
    navLink: <Link to="/signup">sign up instead</Link>,
    demoUser: {
      email_address: 'seedemail',
      first_name: 'Beyonce',
      last_name: 'Knowles',
      password: 'password'
    }
  };
};

const mDTP = dispatch => {
  return {
    login: user => dispatch(login(user)),
    processForm: (user) => dispatch(login(user)),
    otherForm: (
      <button className='session-other'onClick={() => dispatch(openModal('signup'))}>
        SIGNUP
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(receiveErrors([]))
  };
};


export default connect(
  mSTP,
  mDTP
)(SessionForm);
