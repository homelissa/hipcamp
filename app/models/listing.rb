class Listing < ApplicationRecord
  validates :host_id, :name, :description, :address, :daily_cost, :max_guest,
            :lat, :lng, :check_in_after, :check_in_before, :icon_url, presence: true

  validates :is_camping, :allow_pets, :is_wifi, :is_toilets, :is_showers, :is_biking,
            :is_fishing, :is_paddling, :is_horseback_riding, :is_surfing, :is_climbing,
            inclusion: { in: [true, false] }

  belongs_to :host,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: :User
end
