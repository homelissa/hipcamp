import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';




class Booking extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment(),
      endDate: moment()
    };
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeStart(date) {
    this.setState({startDate: date});
  }

  handleChangeEnd(date) {
    this.setState({endDate: date});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(() => this.props.history.push('/'));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          Check-In
          <DatePicker
            selected={this.state.startDate}
            selectsStart
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleChangeStart} />,

          Check-Out
          <DatePicker
            selected={this.state.endDate}
            selectsEnd
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleChangeEnd} />
            <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

export default Booking;
