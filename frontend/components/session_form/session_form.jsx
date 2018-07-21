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
            <div className="session-welcome-header">Welcome to Hippycamp!</div>
            <div className="modal-discover-caption">Discover the best camping near me</div>
            <br/>

            <div onClick={this.props.closeModal} className="close-x">&times;</div>
            {this.renderErrors()}
            <div className="login-form">
              <br/>

                <input className="session-form-input login-input" type="text"
                  value={this.state.email_address}
                  onChange={this.update('email_address')}
                  placeholder='Email Address'

                />


              <br/>

                <input className="session-form-input login-input" type="text"
                  value={this.state.first_name}
                  onChange={this.update('first_name')}
                  placeholder='First Name'

                />



              <br/>

                <input className="session-form-input login-input" type="text"
                  value={this.state.last_name}
                  onChange={this.update('last_name')}
                  placeholder='Last Name'
                />


              <br/>

                <input className="session-form-input login-input" type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder='Password'
                />


              <br/>
              <input className="session-submit" type="submit" value={this.props.formType} />
          </div>

            <div className='session-question'>Already a Hippycamp member?</div>
            <div className='session-options'>
            {this.props.otherForm}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className='session-demo' onClick={(e) => this.demo(e)} >DEMO</button>
           </div>

          </form>
          <button className='session-demo' onClick={(e) => this.demo(e)} >DEMO</button>
        </div>
      );
    } else {
      return (

      <div className='outerDivSessionForm' >
        <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
        <div className="session-welcome-header">Welcome to Hippycamp!</div>
          <div className="modal-discover-caption">Discover the best camping near me</div>
        <br/>

        <div onClick={this.props.closeModal} className="close-x">&times;</div>
        {this.renderErrors()}
        <div className="login-form">
        <br/>

        <input className="session-form-input login-input" type="text"
        value={this.state.email_address}
        onChange={this.update('email_address')}
        placeholder='Email Address'
        />



        <br/>

        <input className="session-form-input login-input" type="password"
        value={this.state.password}
        onChange={this.update('password')}
        placeholder='Password'

        />

        <br/>
        <input className="session-submit" type="submit" value={this.props.formType} />
        </div>
          <div className='session-question'>Don't have an account?</div>
          <div className='session-options'>
          {this.props.otherForm}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button className='session-demo' onClick={(e) => this.demo(e)} >DEMO</button>
         </div>
        </form>
        </div>
      </div>
      );

    }


 }







}

export default withRouter(SessionForm);
