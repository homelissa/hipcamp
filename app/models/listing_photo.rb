# == Schema Information
#
# Table name: listing_photos
#
#  id         :bigint(8)        not null, primary key
#  listing_id :integer          not null
#  image_url  :string           not null
#  order      :integer          not null
#

class ListingPhoto < ApplicationRecord
  validates :listing_id, :image_url, :order, presence: true

  belongs_to :listing,
    primary_key: :id,
    foreign_key: :listing_id,
    class_name: :Listing 
end
