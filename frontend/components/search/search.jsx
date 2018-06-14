import React from 'react';
import ListingIndex from './listing_index';
import ListingMap from '../listing_map/listing_map';

class Search extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.fetchListings()
  }


  render() {
    // console.log(this.props.listings)
    return(

      <div className="search">
        <ListingIndex listings={this.props.listings} />
        <ListingMap listings={this.props.listings} updateFilter={this.props.updateFilter} />
      </div>
    )
  }

}



export default Search;
