import React from 'react';
import { Link } from 'react-router-dom';
import CreateReviewContainer from '../reviews/create_review_container'

class CreateReview extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      description: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount() {
    this.props.fetchListing(this.props.match.params.listingId)
  }

  componentWillUnmount () {
    this.props.clearErrors();
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

  toDateInputValue () {
    let date = new Date();
    return date.toJSON().slice(0, 10);
  }


  render(){
    console.log(this.props.listing)
    if (!this.props.listing) {
      return null
    }

    return(
      <div className='create-review-form'>
        {this.renderErrors()}
        <div className='create-review-listing-name'>{this.props.listing.name}</div>
        <form className='form-submission'onSubmit={this.handleSubmit}>


              <textarea className='description'
                cols='50'
                rows='3'
                value={this.state.description}
                onChange={this.update('description')}
                placeholder='Share your experience here!'/>

            <input className='create-review-submit' type='submit' value='Submit Review'/>
          </form>
      </div>
    );
  }
}

export default CreateReview;
