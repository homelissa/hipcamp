import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check_in: moment(),
      check_out: moment().add(30, "days"),
      searchText: ''
    }

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
     this.props.history.push(`/listings`)

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
      <div className='search-bar-outer-most'>
        <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.search}
          onChange={this.update('searchText')}
          className="search-bar"
          placeholder="Find camping near North Beach, Castro, Sunset..."
        />

          <div className='search-form'>
            <div className='search-container-form'>
              {this.renderErrors()}



              <div className='check-in-out'>
                <div className='check-in-container'>
                  <div className='check-in-out-label'>Check In</div>

                  <div className='search-check-in'>
                  <DatePicker className='search-click-in-picker'
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
                </div>

                <div className='check-out-container'>
                  <div className='check-in-out-label'>Check Out</div>
                    <DatePicker className='search-check-out-picker'
                    minDate={this.state.check_in}
                    selected={this.state.check_out}
                    selectsEnd
                    check_in={this.state.check_in}
                    check_out={this.state.check_out}
                    onChange={this.handleChangeEnd}
                    placeholderText="Check Out"/>
                    <p id="checkOutErrors">Can't pick a check out date before check in</p>
                  </div>
                  <input className='search-now-button' type='submit' value="Search" />
              </div>

            </div>



          </div>
          </form>
      </div>

    )
  }

}

export default SearchBar;
