json.extract! booking,
  :id,
  :guest_id,
  :listing_id,
  :num_guest,
  :status
  json.check_in (booking.check_in.strftime("%b %d %Y"))
  json.check_out (booking.check_out.strftime("%b %d %Y"))
  json.listing do
    json.id booking.listing.id
    json.name booking.listing.name
    json.icon_url booking.listing.icon_url
  end
