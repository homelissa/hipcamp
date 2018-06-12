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
import UserBookingContainer from './user_bookings/user_bookings_container';
import CreateReviewContainer from './reviews/create_review_container';
import EditReviewContainer from './reviews/edit_review_container';

const App = () => (
  <div>
    <Modal />
    <header>
      <GreetingContainer />
    </header>
    <Switch>
      <Route exact path="/" component={Index}/>
      <Route exact path="/listings" component={SearchContainer}/>
      <Route exact path="/listings/:listingId" component={ListingShowContainer}/>
      <ProtectedRoute path="/user/:userId" component={UserBookingContainer}/>
      <ProtectedRoute path="/listings/:listingId/review/new" component={CreateReviewContainer}/>
      <ProtectedRoute path="/listings/:listingId/reviews/:reviewId" component={EditReviewContainer}/>
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
