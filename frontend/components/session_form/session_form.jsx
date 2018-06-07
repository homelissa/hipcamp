import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email_address: '',
      first_name: '',
      last_name: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  demo(e) {
    e.preventDefault();
    this.props.login(this.props.demoUser).then(this.props.closeModal);
  }

  componentWillUnmount () {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    // this.props.processForm(user).then(this.props.history.push('/'))

    // this.props.processForm(user).then(()=> this.props.history.push('/'))
     this.props.processForm(user).then(this.props.closeModal)
  }

  renderErrors() {
    return(
      <ul className='session-errors'>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {

    if (this.props.formType === 'signup') {
      return (
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            Welcome to hipCamp!
            <br/>

            <div onClick={this.props.closeModal} className="close-x">X</div>
            {this.renderErrors()}
            <div className="login-form">
              <br/>
              <label>Email Address:
                <input className="session-form-input login-input" type="text"
                  value={this.state.email_address}
                  onChange={this.update('email_address')}

                />
               </label>


              <br/>
              <label>First Name:
                <input className="session-form-input login-input" type="text"
                  value={this.state.first_name}
                  onChange={this.update('first_name')}

                />
               </label>


              <br/>
              <label>Last Name:
                <input className="session-form-input login-input" type="text"
                  value={this.state.last_name}
                  onChange={this.update('last_name')}

                />
               </label>

              <br/>
              <label>Password:
                <input className="session-form-input login-input" type="password"
                  value={this.state.password}
                  onChange={this.update('password')}

                />
              </label>

              <br/>
              <input className="session-submit" type="submit" value={this.props.formType} />
          </div>

            <div className='session-question'>Already a hipCamp member?</div>
            <div>{this.props.otherForm}</div>

              <button onClick={this.demo.bind(this)} >DEMO</button>


          </form>
        </div>
      );
    } else {
      return (

      <div className='outerDivSessionForm' >
        <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
        Welcome to hipCamp!
        <br/>

        <div onClick={this.props.closeModal} className="close-x">X</div>
        {this.renderErrors()}
        <div className="login-form">
        <br/>
        <label>Email Address:
        <input className="session-form-input login-input" type="text"
        value={this.state.email_address}
        onChange={this.update('email_address')}

        />
        </label>


        <br/>
        <label>Password:
        <input className="session-form-input login-input" type="password"
        value={this.state.password}
        onChange={this.update('password')}

        />
        </label>
        <br/>
        <input className="session-submit" type="submit" value={this.props.formType} />
        </div>
          <div className='session-question'>Don't have an account?</div>
        {this.props.otherForm}
            <button onClick={(e) => this.demo(e)} >DEMO</button>
        </form>
        </div>
      </div>
      );

    }


 }







}

export default withRouter(SessionForm);
