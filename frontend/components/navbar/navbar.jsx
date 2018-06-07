import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let greeting;

    if (this.props.currentUser) {
      greeting =
        <div className='navbar'>
          <h2 className="header-name">Hi, {`${this.props.currentUser.first_name} ${this.props.currentUser.last_name}!`}</h2>
          <button onClick={this.props.logout}>Log Out</button>
        </div>;

    } else {
      greeting =
        <div className='navbar'>
          <Link to="/login">Login</Link>
          &nbsp;or&nbsp;
          <Link to="/signup">Sign up!</Link>
        </div>;
    }

    return (
      <div>{greeting}</div>
    )
  }

}

export default withRouter(Navbar);
