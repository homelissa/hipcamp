export const getListingByNeighborhood = (near) => (
  $.ajax({
    method: 'GET',
    url: 'api/business_searches/',
    data: { near }
  })
);
