import React from 'react';
import { Link } from 'react-router-dom';
import SearchBarContainer from './search_bar/search_bar_container';


class Index extends React.Component {
  render () {
    return (
      <div>
        <div className="landing-page">

          <div className='landing-page-top-left'>
            <div className='landing-page-title'>Find yourself</div>
            <div className='landing-page-second'>outside.</div>
            <div className='landing-page-tagline'> Search, discover, and book over <strong>285,000 </strong>campsites in the neighborhoods of San Francisco.</div>
            <div className = 'search-bar-container'><SearchBarContainer /></div>
            <div className='index-to-listings'><Link to="/listings"><span>or Discover the best camps near me &#8594;</span> </Link></div>

          </div>

          <img className="landing-page-image" src={"https://images.unsplash.com/photo-1504193902866-27cfb5aafcc8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c17ef754724f3c313c3c0266ec653aff&auto=format&fit=crop&w=1350&q=80"} />
        </div>

        <div className='landing-page-image-caption'><strong>The Banffy Campsite</strong> hosted by Melissa in the Sunset</div>
      </div>
    )
  }
}

export default Index;
