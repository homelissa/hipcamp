import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager'


const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

const mapOptions = {
  center: {
    lat: 37.7947284731866,
    lng: -122.411727905273
  },
  zoom: 13
};





class ListingMap extends React.Component {
  constructor(props) {
    super(props);

  }


  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions)
    this.MarkerManager = new MarkerManager(this.map)
    this.registerListeners();
    this.geocoder = new google.maps.Geocoder;

  }



  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.listings);
  }

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





 //  recenterMap() {
 //   this.geocoder.geocode({ address: this.state.searchQuery }, (result, status) => {
 //     if (status === 'OK') {
 //       const newCenter = result[0].geometry.location;
 //       this.map.setCenter(newCenter);
 //       this.setState({ searchQuery: "" });
 //     }
 //   }
 //
 // }


  handleMarkerClick(listing) {
    this.props.history.push(`listings/${listing.id}`);
  }



  render() {
    if (this.MarkerManager) {
      console.log(this.props.listings)
      this.MarkerManager.updateMarkers(this.props.listings);
    }



    return (
      <div className='map' ref="map">
      </div>
    );
  }
}

export default ListingMap;
