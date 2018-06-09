import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const ListingIndexItem = ({listing}) => {

  return (
    <div>
      <h1>{listing.name}</h1>
      <h2>{listing.description}</h2>
        <ul>
          <li>Location:
             <strong>{listing.address}</strong>
          </li>

          <li>Daily Cost: 
             <strong>{listing.daily_cost}</strong>
          </li>

        </ul>
      <Link to={`/listings/${listing.id}`}>CLICK ME FOR MORE DETAILS</Link>
      <Link to={`/listings/${listing.id}`}>
        <img className="listing-photo" src={listing.icon_url}></img>
      </Link>
    </div>

  )

}


export default withRouter(ListingIndexItem);
