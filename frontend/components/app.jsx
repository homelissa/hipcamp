import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import {ProtectedRoute} from '../util/route_util';
import Index from './index';
import Modal from './modal/modal';
import SearchContainer from './search/search_container';
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
