json.extract! user, :id, :email_address, :first_name, :last_name
json.bookings (user.bookings.pluck(:id))
