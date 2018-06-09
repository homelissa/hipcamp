import React from 'react';
import ListingIndexItem from './listing_index_item';
import { Link } from 'react-router-dom';

class ListingIndex extends React.Component {

  componentDidMount() {
    this.props.fetchListings();
  }

  render() {

    const listings = this.props.listings.map(listing => {
      return (
        <ListingIndexItem
          key={listing.id}
          listing={listing}
          />
      )
    })

    return (
      <div className="listing-index">
        <h1>Listings: </h1>
        <ul>
          {listings}
        </ul>
      </div>
    );
  }
}

export default ListingIndex;
