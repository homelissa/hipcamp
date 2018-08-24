import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, demoUser, logout, openModal, login }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to={`/`} className='hipcamp-logo' >HIPPYCAMP</Link>
  

      <div className='login-signup-button'>
        <button className='signup-button' onClick={() => openModal('signup')}>Sign up</button>
        &nbsp;&nbsp;
        <button className='login-button' onClick={() => openModal('login')}>Log in</button>
        <button className='demo-user-button' onClick={() => login(demoUser)}>Demo User</button>
      </div>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="login-signup">
      <div className='global-nav'>
        <Link to={`/`} className='hipcamp-logo'>HIPPYCAMP</Link>
      </div>
      <div className="header-name-button">
        <Link to={`/user/${currentUser.id}`}><h2 className="header-name">Hi, {`${currentUser.first_name}!`}</h2></Link>
        &nbsp;&nbsp;
        <button className="header-button" onClick={logout}>Log Out</button>
      </div>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
