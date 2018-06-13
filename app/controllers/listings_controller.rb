class Api::ListingsController < ApplicationController

  def index

    # if params[:search_by_address]
    #   render ''
    # elsif params[:search_by_allow_pets]
    #   render ''
    # elsif params[:search_by_is_camping]
    #   render ''
    # elsif params[:search_by_under_fifty]
    #   render ''
    # else
      @listings = Listing.all
    # end

  end

  def show
    @listing = Listing.find(params[:id])
  end

  def create
    @listing = Listing.create!(listing_params)
  end

  private

  def listings_params
    params.require(:listing).permit(
      :host_id,
      :name,
      :description,
      :address,
      :daily_cost,
      :max_guest,
      :lat,
      :lng,
      :is_camping,
      :allow_pets,
      :is_wifi,
      :is_toilets,
      :is_showers,
      :is_biking,
      :is_fishing,
      :is_paddling,
      :is_horseback_riding,
      :is_surfing,
      :is_climbing,
      :check_in_after,
      :check_out_before,
      :icon_url
    )

  end

end
