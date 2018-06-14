import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';



class Booking extends React.Component {
  constructor (props) {
    super(props)
    console.log(this.props)
    this.state = {
      check_in: moment(),
      check_out: moment().add(30, "days"),
      num_guest: 1,
      listing_id: this.props.match.params.listingId,
      guest_id: this.props.current_user,
      total_price: 50
    };
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      checkInErrors: document.getElementById("checkInErrors"),
      checkOutErrors: document.getElementById("checkOutErrors")
    })
  }


  componentWillUnmount () {
    this.props.clearErrors();
  }



  componentWillReceiveProps(newProps) {
    if (this.props.current_user !== newProps.current_user) {
      this.setState({guest_id: newProps.current_user})
    }
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


  handleChangeStart(date) {
    if (this.state.check_out.diff(date) < 0) {
      this.state.checkInErrors.style.display = "inline-block";
      return;
    } else {
      this.state.checkInErrors.style.display = 'none';
    }
    this.setState({check_in: date});
  }

  handleChangeEnd(date) {
    if (this.state.check_in.diff(date) > 0) {
      this.state.checkOutErrors.style.display = "inline-block";
      return;
    } else {
      this.state.checkOutErrors.style.display = 'none';
    }
    this.setState({check_out: date});
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleStep(stepParam) {
  return e => {
    if (stepParam === '+') {
      this.setState({ num_guest: (this.state.num_guest + 1) });
    } else if (stepParam === '-' ) {
      this.setState({ num_guest: (this.state.num_guest - 1) });
    }
  }
}

  handleSubmit(e) {
     e.preventDefault();
     let submission = {
       check_in: this.state.check_in.format(),
       check_out: this.state.check_out.format(),
       num_guest: this.state.num_guest,
       listing_id: this.state.listing_id,
       guest_id: this.state.guest_id,
       total_price: this.state.total_price
     }
     this.props.createBooking(submission).then(() => this.props.history.push(`/user/${this.state.guest_id}`));
   }



  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <div className='booking-container-form'>
        {this.renderErrors()}
        <div className='check-in-out'>
          <div className='check-in-container'>
            <div className='check-in-out-label'>Check In</div>
            <DatePicker className='click-in-picker'
              minDate={moment()}
              maxDate={this.state.check_out}
              selected={this.state.check_in}
              selectsStart
              check_in={this.state.check_in}
              check_out={this.state.check_out}
              onChange={this.handleChangeStart}
              placeholderText="Click to select a date" />
              <p id="checkInErrors">Can't pick a check in date after check out</p>
          </div>

          <div className='check-out-container'>
            <div className='check-in-out-label'>Check Out</div>
            <DatePicker className='check-out-picker'
            minDate={this.state.check_in}
            selected={this.state.check_out}
            selectsEnd
            check_in={this.state.check_in}
            check_out={this.state.check_out}
            onChange={this.handleChangeEnd}
            placeholderText="Select a date"/>
            <p id="checkOutErrors">Can't pick a check out date before check in</p>
            </div>
          </div>



            <label className='booking-form-container check-in-out guests-label'>Guests:
              <div className="booking-guests">
                <a onClick={this.handleStep('-')}> - </a>
                  <p> {this.state.num_guest} </p>
                <a onClick={this.handleStep('+')}> + </a>
              </div>
            </label>


          <br />

            <input className='book-now-button'type='submit' value="Book Now!" />
      </div>
      </form>
    )
  }
}

export default (Booking);
