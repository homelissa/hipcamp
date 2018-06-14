export const fetchListings = (data) => (
  $.ajax({
    method: 'GET',
    url: '/api/listings',
    data
  })
);

export const fetchListing = id => (
  $.ajax({
    method: 'GET',
    url: `/api/listings/${id}`
  })
);
