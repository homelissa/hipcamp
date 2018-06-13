import React from 'react';
import { Link } from 'react-router-dom';

class Index extends React.Component {
  render () {
    return (
      <div>

        <div className="landing-page">
          <div className='landing-page-title'>Find yourself outside</div>
          <Link className="index-to-listings" to="/listings">See All Listings</Link>
          <img className="landing-page-image" src={"https://www.banfflakelouise.com/sites/default/files/styles/m_960_natural/public/lake-louise-canoe-summer.jpg?itok=AXfYR9Gl"} />
        </div>

        <div className='discover-camping'>Discover camping...</div>

        <div className='first-row-filters'>
          <div >Pet friendly camping</div>
          <div>Under $25</div>
          <div>Glamping near me</div>
        </div>


        <div className='second-row-filters'>
          <div>Yosemite</div>
          <div>Muir Woods</div>
          <div>Mission Dolores</div>
        </div>

        
      </div>
    )
  }
}

export default Index;
