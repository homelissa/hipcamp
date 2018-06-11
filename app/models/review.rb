# == Schema Information
#
# Table name: reviews
#
#  id          :bigint(8)        not null, primary key
#  author      :integer          not null
#  listing_id  :integer          not null
#  created_at  :datetime         not null
#  description :text             not null
#

class Review < ApplicationRecord
  validates :author, :listing_id, :created_at, :description, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author,
    class_name: :User

  belongs_to :listing,
    primary_key: :id,
    foreign_key: :listing_id,
    class_name: :Listing

end
