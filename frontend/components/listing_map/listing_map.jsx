import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';





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
  }

  render() {
    return (
      <div className='map' ref={ map => this.mapNode = map }>
      </div>
    );
  }
}

export default Map;
