import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';



class Booking extends React.Component {
  constructor (props) {
    super(props)
    console.log(this.props)
    this.state = {
      check_in: moment(),
      check_out: moment(),
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
     this.props.createBooking(submission).then(() => this.props.history.push('/'));
   }



  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    return (
      <div>
        Check-In
        <DatePicker
        minDate={moment()}
        selected={this.state.check_in}
        selectsStart
        check_in={this.state.check_in}
        check_out={this.state.check_out}
        onChange={this.handleChangeStart}
        placeholderText="Click to select a date" />,
        <p id="checkInErrors">Can't pick a check in date after check out</p>

        Check-Out
        <DatePicker
        minDate={moment()}
        selected={this.state.check_out}
        selectsEnd
        check_in={this.state.check_in}
        check_out={this.state.check_out}
        onChange={this.handleChangeEnd}
        placeholderText="Click to select a date"/>
        <p id="checkOutErrors">Can't pick a check out date before check in</p>

        <form onSubmit={this.handleSubmit}>
          <label>Number of Guests:
            <input
              type='text'
              value= {this.state.num_guest}
              onChange={this.update('num_guest')} />
          </label>

          <label>Total Price:
            <input
              type='text'
              value={50}
              onChange={this.update('total_price')} />
          </label>


            <input type='submit' value="Book Now!" />
        </form>
      </div>
    )
  }
}

export default (Booking);
