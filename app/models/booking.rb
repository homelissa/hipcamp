# == Schema Information
#
# Table name: bookings
#
#  id          :bigint(8)        not null, primary key
#  guest_id    :integer          not null
#  listing_id  :integer          not null
#  check_in    :datetime         not null
#  check_out   :datetime         not null
#  num_guest   :integer          not null
#  total_price :float            not null
#

class Booking < ApplicationRecord

  STATUS_STATES = %w(APPROVED DENIED PENDING).freeze

  validates :guest_id, :listing_id, :check_in, :check_out, :num_guest, :total_price, presence: true
  validates :status, inclusion: STATUS_STATES
  validate :start_must_come_before_end


  belongs_to :listing,
    primary_key: :id,
    foreign_key: :listing_id,
    class_name: :Listing

  belongs_to :guest,
    primary_key: :id,
    foreign_key: :guest_id,
    class_name: :User

  after_initialize :assign_pending_status

  def approved?
    self.status === 'APPROVED'
  end

  def denied?
    self.status === 'DENIED'
  end

  def pending?
    self.status === 'PENDING'
  end

  def assign_pending_status
    self.status ||= 'PENDING'
  end

  def overlapping_requests
    Booking
      .where(listing_id: listing_id)
      .where.not('check_in > :check_out OR check_out < :check_in',
                check_in: check_in, check_out: check_out)

  end


  def start_must_come_before_end
    return if :check_in < :check_out
    errors[:check_in] << 'must come before check out'
    errors[:check_out] << 'must come after check in'
  end
end
