import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to={`/`} className='hipcamp-logo'>hipCamp</Link>
      <div className='login-signup-button'>
        <button onClick={() => openModal('login')}>LOGIN</button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={() => openModal('signup')}>SIGNUP</button>
      </div>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <div className='global-nav'>
        <Link to={`/`} className='hipcamp-logo'>hipCamp</Link>
      </div>
      <div className="header-name-button">
        <h2 className="header-name">Hi, {`${currentUser.first_name}!`}</h2>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button className="header-button" onClick={logout}>Log Out</button>
      </div>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
