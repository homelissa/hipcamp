export const fetchListings = () => (
  $.ajax({
    method: 'GET',
    url: '/api/listings'
  })
);

export const fetchListing = id => (
  $.ajax({
    method: 'GET',
    url: `/api/listings/${id}`
  })
);



// export const searchListingsByAddress = search_by_address => (
//   $.ajax({
//     method: 'GET',
//     url: '/api/listings',
//     data: {
//       search_by_address,
//     }
//   })
// );
//
// export const searchListingsByAllowPets = search_by_allow_pets=> (
//   $.ajax({
//     method: 'GET',
//     url: '/api/listings',
//     data: {
//       search_by_allow_pets,
//     }
//   })
// );
//
// export const searchListingsByIsCamping = search_by_is_camping => (
//   $.ajax({
//     method: 'GET',
//     url: '/api/listings',
//     data: {
//       search_by_is_camping,
//     }
//   })
// );
//
// export const searchListingsByUnderFifty = search_by_under_fifty=> (
//   $.ajax({
//     method: 'GET',
//     url: '/api/listings',
//     data: {
//       search_by_under_fifty,
//     }
//   })
// );
