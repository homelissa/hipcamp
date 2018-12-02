class Api::ListingSearchesController < ApplicationController
  def index
    @listings = Listing.search_results(params[:near])
    render :index
  end
end
