class Api::ListingsSearchesController < ApplicationController
  def index
    @listings = Listing.search_results(params[:search][:query][:near])
    render :index
  end

  private

  def search_params
    params.require(:search).permit(:query)
  end

end
