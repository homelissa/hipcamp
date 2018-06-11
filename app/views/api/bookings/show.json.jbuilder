json.extract! @booking,
  :id,
  :guest_id,
  :listing_id,
  :check_in,
  :check_out,
  :num_guest
  json.listing do
    json.id @booking.listing.id
    json.name @booking.listing.name
    json.icon_url @booking.listing.icon_url
  end
