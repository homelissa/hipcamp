class Api::BookingsController < ApplicationController
  def show
    @bookings = current_user.bookings.includes(:listing)
    render :index
  end

  def create
    @booking = Booking.new(bookings_params)

    if @booking.save
      render :show
    else
      if @booking.check_in > @booking.check_out
        render json: ['Check in must come before check out'], status: 401
      elsif @booking.check_out < @booking.check_in
        render json: ['Check out must come after check in'], status: 401
      else
        render json: @booking.errors.full_messages, status: 401
      end
    end
  end

  def destroy
    @booking = Booking.find(params[:id])

    if @booking.destroy
      render :show
    else
      render json: @booking.errors.full_messages, status: 401
    end
  end

  private

  def bookings_params
    params.require(:booking).permit(:guest_id, :listing_id, :check_in, :check_out, :num_guest, :total_price)
  end
end
