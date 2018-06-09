import React from 'react';
import { Link } from 'react-router-dom';

class Index extends React.Component {
  render () {
    return (
      <div>

        <div className="landing-page">
          <div className='landing-page-title'>Find yourself outside</div>
          <Link className="index-to-listings" to="/listings">See All Listings</Link>
          <img className="landing-page-image" src={"https://www.banfflakelouise.com/sites/default/files/styles/l_1600_natural/public/canoeing_bow_lake_noel_hendrickson_3_horizontal.jpg?itok=2PiMOrY6"} />
        </div>
      </div>
    )
  }
}

export default Index;
