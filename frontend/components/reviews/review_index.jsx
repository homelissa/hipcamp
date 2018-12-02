import React from 'react';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {

  componentDidMount() {
    this.props.fetchReviews(this.props.match.params.listingId);
  }

  render() {

    if (!this.props.reviews) {
      return null;
    }

    const reviews = Object.values(this.props.reviews).map(review => {
      return (
        <ReviewIndexItem
          key={review.id}
          review={review}
          deleteReview={this.props.deleteReview}
          updateReview={this.props.updateReview}
          currentUser={this.props.currentUser}
          />
      )
    })

    return (
        <ul>
          {reviews}
        </ul>
    );
  }
}

export default ReviewIndex;
