@listings.each do |listing|
  json.set! bench.id do
    json.partial! 'listing', listing: listing
  end
end
