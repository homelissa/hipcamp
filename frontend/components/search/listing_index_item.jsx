import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const ListingIndexItem = ({listing}) => (
  <li>
    <Link to={`/listings/${listing.id}`}>{listing.name}</Link>
  </li>
);

export default withRouter(ListingIndexItem);
