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

  handleChangeStart(date) {
    this.setState({check_in: date});
  }

  handleChangeEnd(date) {
    
    this.setState({check_out: date});
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
        selected={this.state.check_in}
        selectsStart
        check_in={this.state.check_in}
        check_out={this.state.check_out}
        onChange={this.handleChangeStart} />,

        Check-Out
        <DatePicker
        selected={this.state.check_out}
        selectsEnd
        check_in={this.state.check_in}
        check_out={this.state.check_out}
        onChange={this.handleChangeEnd} />

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
              value={"50"}
              onChange={this.update('total_price')} />
          </label>


            <input type='submit' value="Submit" />
        </form>
      </div>
    )
  }
}

export default (Booking);
