export const getListingByNeighborhood = (near) => (
  $.ajax({
    method: 'GET',
    url: 'api/listing_searches/',
    data: { near }
  })
);
