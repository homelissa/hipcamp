import React from 'react';
import ReactDOM from 'react-dom';
// import { login, signup, logout } from './util/session_api_util.js'
import { login, signup, logout } from './actions/session_actions.js'
import configureStore from './store/store.js'
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser}
      }
    };

    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }


  // TESTING START
  // window.login = login;
  // window.signup = signup;
  // window.logout = logout;
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // TESTING END

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
