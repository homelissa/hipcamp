import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager'




class Map extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {



    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    }

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    const listingMarker = { lat: 37.7758, lng: -122.435  }
    const marker = new google.maps.Marker({position: listingMarker, animation: google.maps.Animation.DROP})
    const listingMarker2 = { lat: 37.7765, lng: -122.450  }
    marker.setMap(this.map)
    const marker2 = new google.maps.Marker({position: listingMarker2, animation: google.maps.Animation.DROP})
    marker2.setMap(this.map)
    this.MarkerManager = new MarkerManager(this.map);
  }



  render() {
    return (
      <div className='map' ref={ map => this.mapNode = map }>
      </div>
    );
  }
}

export default Map;
