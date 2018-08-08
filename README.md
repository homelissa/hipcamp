# README

# HIPCAMP - find yourself outside.

## Overview

HIPCAMP is a single page Hipcamp clone built with a React/Redux frontend and Ruby on Rails backend. Users can view camp listings, filter the listings by location using the Google Map API, and read reviews. Logged in users can also create and delete bookings, and create, edit, view, and delete reviews, and see their user profile page.

![Screen_Shot_2018-06-15_at_2.27.16_PM.png](https://lh3.googleusercontent.com/1rx13oD5sa0D2B-f9PLGEOYSUCmTIQhiUSGC6JF-wWv6CnE7Dm35ynThglloORjfZhXnyfbeEVqjYbB93RS2cKFHtxOeBzdtDvwACK1b4f2dW2c-opqpNrFDwyzpJSrXhjoRTqkLqFeQfdSjB4wJDksb_-5TG-zkPsAlv_LsK-1izv5P5aoM1ZBqNsdK8wCCOqfVktTtEnaKndoixHDRRBjhXQfRlJymZJBSE_Kr6G3oV-UZUv6TiHRgdUjCWWklA0GWF3ScUoNcmMZc_d4cw2c5jhFRZHMy3PEjb4MVZ0MMBOCAghyb0ororVE_MrVu5PvYFH4XxnjfXsYdPI2ruCByey9cSOurGTy7jkPwwNWjUT9JIp0uP-00LJi9awRV2HCV5O0J6M6_dfzwQvDs3lHicJ2nDsP_qxrcfWcDS9Zk-GSlfbJec7V43u3FKYRoI0gyLFFsBtFNRBvwGryNSDCNYGvRFr6a7G6MRU2si22T5khGXIicYUODFbMCW_ibI-s_BO4SxfNCNXWC2qmhXiN9e1XI8dbFCjk-RCODdMC9e0eeYtH7pas-tGdDvWhax-AFV-usrbtM4DosRy62wzuKselFjTsv0GZeI-8=w1102-h929-no)](https://lh3.googleusercontent.com/1rx13oD5sa0D2B-f9PLGEOYSUCmTIQhiUSGC6JF-wWv6CnE7Dm35ynThglloORjfZhXnyfbeEVqjYbB93RS2cKFHtxOeBzdtDvwACK1b4f2dW2c-opqpNrFDwyzpJSrXhjoRTqkLqFeQfdSjB4wJDksb_-5TG-zkPsAlv_LsK-1izv5P5aoM1ZBqNsdK8wCCOqfVktTtEnaKndoixHDRRBjhXQfRlJymZJBSE_Kr6G3oV-UZUv6TiHRgdUjCWWklA0GWF3ScUoNcmMZc_d4cw2c5jhFRZHMy3PEjb4MVZ0MMBOCAghyb0ororVE_MrVu5PvYFH4XxnjfXsYdPI2ruCByey9cSOurGTy7jkPwwNWjUT9JIp0uP-00LJi9awRV2HCV5O0J6M6_dfzwQvDs3lHicJ2nDsP_qxrcfWcDS9Zk-GSlfbJec7V43u3FKYRoI0gyLFFsBtFNRBvwGryNSDCNYGvRFr6a7G6MRU2si22T5khGXIicYUODFbMCW_ibI-s_BO4SxfNCNXWC2qmhXiN9e1XI8dbFCjk-RCODdMC9e0eeYtH7pas-tGdDvWhax-AFV-usrbtM4DosRy62wzuKselFjTsv0GZeI-8=w1102-h929-no)

[Live Demo](https://hippycamp.herokuapp.com/#/)

## Code Highlights
I wanted users to be able to see the number of reviews for a listing and the number of booking requests. These numbers will dynamically update as users delete their review and/or delete their booking request, by interacting the listing reducer with the review actions.

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
I wanted users to filter listings based on location by zooming in and out of the google map. I used event listeners to update the coordinate bounds when users click on the map.

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
* Google Map API
* React Datepicker API
* SASS for all styling

## MVP List

* Users can filter listings by location using the Google Map API
* Logged in users can create and delete bookings. They can view their booking requests on the user profile page.
* Logged in users can create, read, update, and delete reviews.


## Future Plans

* Create a search bar that filters listings by location
* Allow hosts to approve and deny booking requests
* Add filters for users to search for campsites with specific features.
