import React from 'react';
import ListingIndex from './listing_index';
import ListingMap from '../listing_map/listing_map';

class Search extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchListings()
  }


  render() {
    // console.log(this.props.listings)
    return(

      <div className="search">
        <ListingIndex listings={this.props.listings} fetchListings={this.props.fetchListings}/>
        <ListingMap listings={this.props.listings} fetchListings={this.props.fetchListings} />
      </div>
    )
  }

}



export default Search;
