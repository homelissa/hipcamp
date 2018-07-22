export const getListingByNeighborhood = (query) => (
  $.ajax({
    method: 'GET',
    url: 'api/business_searches/',
    data: { search: {query} }
  })
);
