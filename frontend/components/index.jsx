import React from 'react';
import { Link } from 'react-router-dom';
import SearchBarContainer from './search_bar/search_bar_container';


class Index extends React.Component {
  render () {
    return (
      <div>

        <div className="landing-page">

          <div className='landing-page-top-left'>
            <div className='landing-page-title'>Find yourself outside.</div>
            <div className='landing-page-tagline'> Search, discover, and book over <strong>285, 000 </strong>campsites in the neighborhoods of San Francisco.</div>
            <div className = 'search-bar-container'><SearchBarContainer /></div>
            <div className='index-to-listings'><Link to="/listings">or Discover the best camps near me <span>&#8594;</span> </Link></div>

          </div>

          <img className="landing-page-image" src={"https://www.banfflakelouise.com/sites/default/files/styles/m_960_natural/public/lake-louise-canoe-summer.jpg?itok=AXfYR9Gl"} />
        </div>










      </div>
    )
  }
}

export default Index;
