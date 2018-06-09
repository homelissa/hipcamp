json.partial! '/api/listings/listing', listing: @listing


@listing.listing_photos.each do |photo|
  json.listing_photos do
    json.set! photo.id do
      json.extract! photo, :id, :listing_id, :image_url, :order
    end
  end
end
