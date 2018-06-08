import React from 'react';
import { Link } from 'react-router-dom';

class ListingShow extends React.Component {

  componentDidMount() {
    this.props.fetchListing(this.props.match.params.listingId)
  }

  render(){

    return(
      <div>
        {this.props.listing.name}

        {this.props.listing.description}
        <img className="listing-photo" src={this.props.listing.icon_url}></img>
        <Link to={`/`}>Index</Link>
      </div>
    );
  }
}

export default ListingShow;
