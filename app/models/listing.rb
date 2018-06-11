# == Schema Information
#
# Table name: listings
#
#  id                  :bigint(8)        not null, primary key
#  host_id             :integer          not null
#  name                :string           not null
#  description         :text             not null
#  address             :string           not null
#  daily_cost          :integer          not null
#  max_guest           :integer          not null
#  lat                 :float            not null
#  lng                 :float            not null
#  is_camping          :boolean          not null
#  allow_pets          :boolean          not null
#  is_wifi             :boolean          not null
#  is_toilets          :boolean          not null
#  is_showers          :boolean          not null
#  is_biking           :boolean          not null
#  is_fishing          :boolean          not null
#  is_paddling         :boolean          not null
#  is_horseback_riding :boolean          not null
#  is_surfing          :boolean          not null
#  is_climbing         :boolean          not null
#  elevation           :float
#  check_in_after      :string           not null
#  check_out_before    :string           not null
#  icon_url            :string           not null
#

class Listing < ApplicationRecord
  validates :host_id, :name, :description, :address, :daily_cost, :max_guest,
            :lat, :lng, :check_in_after, :check_out_before, :icon_url, presence: true

  validates :is_camping, :allow_pets, :is_wifi, :is_toilets, :is_showers, :is_biking,
            :is_fishing, :is_paddling, :is_horseback_riding, :is_surfing, :is_climbing,
            inclusion: { in: [true, false] }

  belongs_to :host,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: :User

  has_many :listing_photos,
    primary_key: :id,
    foreign_key: :listing_id,
    class_name: :ListingPhoto

  has_many :bookings,
    primary_key: :id,
    foreign_key: :listing_id,
    class_name: :Booking

  has_many :reviews,
    primary_key: :id,
    foreign_key: :listing_id,
    class_name: :Review
end
