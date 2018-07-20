/* global google:false */

import React from 'react';

class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
    this.geocoder = new google.maps.Geocoder;
  }

  createMarkerFromListing(listing) {
    const markerInfoWindow = new google.maps.InfoWindow({
      content:
        `<div class="infowindow">
        <a href="/#/listings/${listing.id}" style="display: flex;">
          <img class="infowindow-image" src="${listing.icon_url}"/>
          <div>
            <h2 class="infowindow-title"> ${listing.name} </h2>
            <p>${listing.address}</p>
            <p>$${listing.daily_cost}/night</p>
            <p>${listing.reviews.length} Reviews</p>
          </div>
        </a>
      </div>`,
      maxWidth: 250,
    })

    const marker = new google.maps.Marker({
      position: { lat: listing.lat, lng: listing.lng },
      map: this.map,
      listingId: listing.id,
      animation: google.maps.Animation.DROP,
      infoWindow: markerInfoWindow,
      clicked: false
    });

    this.markers[marker.listingId] = marker;

    marker.addListener('mouseover', () => {
      marker.infoWindow.open(this.map, marker);
    });

    marker.addListener('mouseout', () => {
      if (!marker.clicked) marker.infoWindow.close(this.map, marker);
    });

    marker.addListener('click', () => {
      marker.clicked = !marker.clicked;
      if (marker.clicked) {
        this.hideAllInfoWindows();
        marker.infoWindow.open(this.map, marker);
        const targetListing = document.getElementById(`listing-${listing.id}`);
        targetListing.scrollIntoView({ behavior: "smooth", block: "center" });
      } else {
        marker.infoWindow.close(this.map, marker);
      }
    });

  }

  hideAllInfoWindows() {
    Object.values(this.markers).forEach(marker => {
      marker.infoWindow.close(this.map, marker);
    });
  }

  removeMarker(marker) {
    this.markers[marker.listingId].setMap(null);
    delete this.markers[marker.listingId];
  }


  updateMarkers(listings, geolocation) {


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
