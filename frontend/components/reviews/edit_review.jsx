import React from 'react';

class EditReview extends React.Component {

  constructor(props) {
    super(props)
    this.state = this.props.review
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchReview(this.props.match.params.reviewId)
    this.props.fetchListing(this.props.match.params.listingId)
  }

  componentWillReceiveProps(newProps) {
    if (this.props.review !== newProps.review) {
      this.setState(newProps.review)
    }
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
    this.props.updateReview(this.props.match.params.listingId, this.state).then(() => this.props.history.push(`/listings/${this.props.match.params.listingId}`))
  }

  toDateInputValue () {
    let date = new Date();
    return date.toJSON().slice(0, 10);
  }

  render(){

    if (!this.props.review) {
      return null
    }

    if (!this.props.listing) {
      return null
    }

    return(
      <div className='edit-review-form'>
        {this.renderErrors()}

        <div className='edit-review-listing-name'>{this.props.listing.name}</div>
        <form className='edit-form-submission'onSubmit={this.handleSubmit}>
              <textarea className='edit-review-description'
                cols='50'
                rows='3'
                value={this.state.description}
                onChange={this.update('description')}  />
            <input className='edit-review-submit' type='submit' value='Submit Review'/>
          </form>
      </div>
    );
  }
}

export default EditReview;
