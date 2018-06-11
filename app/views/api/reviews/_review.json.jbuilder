json.extract! review, :id, :author, :listing_id, :created_at, :description

json.set! "listings" do
  json.partial! '/api/listings/listing', listing: review.listing
end

json.set! "user" do
  json.partial! '/api/users/user', user: review.author
end
