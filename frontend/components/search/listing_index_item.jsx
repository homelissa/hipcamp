import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const ListingIndexItem = ({listing}) => {

  return (
    <li>
      <h1>{listing.name}</h1>
      <Link to={`/listings/${listing.id}`}>
        <img className="listing-photo" src={listing.icon_url}></img>
      </Link>
    </li>

  )

}


export default withRouter(ListingIndexItem);
