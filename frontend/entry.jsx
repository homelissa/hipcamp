import React from 'react';
import ReactDOM from 'react-dom';
import { login, signup, logout } from './util/session_api_util.js'
import configureStore from './store/store.js'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById("root");

  // TESTING START
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // TESTING END

  const store = configureStore();
  ReactDOM.render(<h1>Welcome to hipCamp</h1>, root);
});
