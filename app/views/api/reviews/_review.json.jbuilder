json.extract! review,
  :id,
  :listing_id,
  :description
  json.created_at (review.created_at.strftime("%b %d %Y"))

json.set! "user" do
  json.partial! '/api/users/user', user: review.author
end
