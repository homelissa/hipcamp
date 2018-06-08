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
import SearchContainer from './search/search_container';
import ListingIndexItem from './search/listing_index_item';
import ListingShowContainer from './listing_show/listing_show_container';

const App = () => (
  <div>
    <Modal />
    <header>
      <GreetingContainer />
    </header>
    <Switch>
      <Route exact path="/" component={SearchContainer}/>
      <Route path="/listings/:listingId" component={ListingShowContainer}/>
    </Switch>
  </div>
);

export default App;
