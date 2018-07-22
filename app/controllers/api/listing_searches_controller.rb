class Api::ListingSearchesController < ApplicationController
  def index
    # @listings = Listing.search_results(params[:search][:query][:near])
    @listings = Listing.search_results(params[:near])
    render :index
  end

  private

  # def search_params
  #   # params.require(:search).permit(:query)
  #   params.require(:search).permit(:near)
  # end

end
