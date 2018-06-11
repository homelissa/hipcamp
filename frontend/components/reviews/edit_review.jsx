import React from 'react';
import { Link } from 'react-router-dom';


class EditReview extends React.Component {

  constructor(props) {
    super(props)
    this.state = this.props.review
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount() {
    this.props.fetchReview(this.props.match.params.reviewId)
  }

  update(field) {
    return(e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateReview(this.props.match.params.listingId, this.state).then(() => this.props.history.push(`/`))
  }

  render(){

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
            <label>Date
              <input
                type='date'
                value={this.state.created_at}
                onChange={this.update('created_at')}
              />
            </label>

            <label>Description
              <textarea
                value={this.state.description}
                onChange={this.update('description')}  />
            </label>

            <input type='submit' value='Submit Review'/>
          </form>
      </div>
    );
  }
}

export default EditReview;
