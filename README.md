# README

# HIPCAMP - find yourself outside.

## Overview

HIPCAMP is a single page Hipcamp clone built with a React/Redux frontend and Ruby on Rails backend. Users can view camp listings, filter the listings by location using the Google Map API, and read reviews. Logged in users can also create and delete bookings, and create, edit, view, and delete reviews, and see their user profile page.

[Live Demo](https://hippycamp.herokuapp.com/#/)

## Code Highlights
I wanted users to be able to see the number of reviews for a listing and the number of booking requests. These numbers will dynamically update as users delete their review and/or delete their booking request.

```javascript

const listingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_LISTINGS:
      return action.listings;
    case RECEIVE_LISTING:
      return merge({}, state, {[action.listing.id]: action.listing});
    case REMOVE_REVIEW:
      const newState = merge({}, state);
      let listing = newState[action.review.listing_id];
      let idx = listing.reviews.indexOf(action.review.id);
      listing.reviews.splice(idx, 1);
      return newState;
    default:
      return state;
  }
};

export default listingsReducer;
```

### Google Map Api
I wanted users to filter listings based on location by zooming in and out of the google map.

```javascript
registerListeners() {
  google.maps.event.addListener(this.map, 'idle', () => {
    const { north, south, east, west } = this.map.getBounds().toJSON();
    const bounds = {
      northEast: { lat:north, lng: east },
      southWest: { lat: south, lng: west } };
    this.props.updateFilter('bounds', bounds);
  });

  google.maps.event.addListener(this.map, 'click', (event) => {
    const coords = getCoordsObj(event.latLng);
    this.handleClick(coords);
  });
}
```


## Technologies
* React/Redux
* Rails
* Google Map Api
* React Datepicker
* SASS for all styling

## MVP List

* Users can filter listings by location using the Google Map API
* Logged in users can create and delete bookings. They can view their booking requests on the user profile page.
* Logged in users can create, read, update, and delete reviews.


## Future Plans

* Create a search bar that filters listings by location
* Allow hosts to approve and deny booking requests
* Add filters for users to search for campsites with specific features.
