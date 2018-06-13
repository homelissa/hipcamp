/* global google:false */

import React from 'react';

class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};

  }

  createMarkerFromListing(listing) {

    const marker = new google.maps.Marker({
      position: {lat: listing.lat, lng: listing.lng},
      map: this.map,
      listingId: listing.id
    });

    this.markers[marker.listingId] = marker;

  }

  removeMarker(marker) {
    this.markers[marker.listingId].setMap(null);
    delete this.markers[marker.listingId];
  }


  updateMarkers(listings) {
    console.log('asdf');

  
    const listingsObj = {};
    listings.forEach(listing => listingsObj[listing.id] = listing);

    listings.filter(listing => !this.markers[listing.id])
    .forEach(newListing => this.createMarkerFromListing(newListing));

    Object.keys(this.markers).filter(listingId => !listingsObj[listingId])
    .forEach(listingId => this.removeMarker(this.markers[listingId]));

    console.log(listingsObj);

  }

}


export default MarkerManager;
