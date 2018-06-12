import React from 'react';
import { Link } from 'react-router-dom';
import CreateReviewContainer from '../reviews/create_review_container'

class CreateReview extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      created_at: "",
      description: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount() {
    this.props.fetchListing(this.props.match.params.listingId)
  }

  renderErrors() {
    return(
      <ul className='review-errors'>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  update(field) {
    return(e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReview(this.props.match.params.listingId, this.state).then(() => this.props.history.push(`/listings/${this.props.match.params.listingId}`))
  }

  render(){
    console.log(this.props.listing)
    if (!this.props.listing) {
      return null
    }

    return(
      <div>
        {this.renderErrors()}
        <div>{this.props.listing.name}</div>
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

export default CreateReview;
