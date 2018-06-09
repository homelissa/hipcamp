import React from 'react';
import { Link } from 'react-router-dom';

class Index extends React.Component {
  render () {
    return (
      <div className="landing-page">
        <Link to='/listings'>CLICK ME TO SEE ALL THE LISTINGS</Link>
      </div>
    )
  }
}

export default Index;
