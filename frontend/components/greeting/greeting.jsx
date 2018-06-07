import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <h1>hipCamp</h1>
      <div className='login-signup-button'>
        <button onClick={() => openModal('login')}>Login</button>
        &nbsp;or&nbsp;
        <button onClick={() => openModal('signup')}>Signup</button>
      </div>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {`${currentUser.first_name} ${currentUser.last_name}!`}</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
