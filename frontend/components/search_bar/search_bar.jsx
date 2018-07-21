import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
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
    return (
      <form onSubmit={this.handleSubmit}>
      <div className='booking-outer-most'>
        <div className='booking-form'>
          <div className='booking-container-form'>
            {this.renderErrors()}
            <div className='check-in-out'>
              <div className='check-in-container'>
                <div className='check-in-out-label'></div>
                <DatePicker className='click-in-picker'
                  minDate={moment()}
                  maxDate={this.state.check_out}
                  selected={this.state.check_in}
                  selectsStart
                  check_in={this.state.check_in}
                  check_out={this.state.check_out}
                  onChange={this.handleChangeStart}
                  placeholderText="Check In" />
                  <p id="checkInErrors">Can't pick a check in date after check out</p>
              </div>

              <div className='check-out-container'>
                <div className='check-in-out-label'></div>
                <DatePicker className='check-out-picker'
                minDate={this.state.check_in}
                selected={this.state.check_out}
                selectsEnd
                check_in={this.state.check_in}
                check_out={this.state.check_out}
                onChange={this.handleChangeEnd}
                placeholderText="Check Out"/>
                <p id="checkOutErrors">Can't pick a check out date before check in</p>
                </div>
            </div>
           
          </div>



          <input className='book-now-button'type='submit' value="Search" />
        </div>
      </div>
      </form>

    )
  }

}

export default SearchBar;