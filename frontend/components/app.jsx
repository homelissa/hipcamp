import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import NavbarContainer from './navbar/navbar_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import Index from './index';
import Modal from './modal/modal';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Modal />
    <header>
      <GreetingContainer />
    </header>


        <Route path="/" component={Index}/>



  </div>
);

export default App;
