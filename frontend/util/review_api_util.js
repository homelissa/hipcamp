export const fetchReviews = listingId => (
  $.ajax({
    method: 'GET',
    url: `api/listings/${listingId}/reviews`
  })
);

export const fetchReview = reviewId => (
  $.ajax({
    method: 'GET',
    url: `api/reviews/${reviewId}`
  })
);

export const createReview = (listingId, review) => (
  $.ajax({
    method: 'POST',
    url: `api/listings/${listingId}/reviews`,
    data: {review}
  })
);

export const updateReview = (listingId, review) => (
  $.ajax({
    method: 'POST',
    url: `api/listings/${listingId}/reviews/${review.id}`,
    data: {review}
  })
);

export const deleteReview = reviewId => (
  $.ajax({
    method: 'DELETE',
    url: `api/reviews/${reviewId}`
  })
);
