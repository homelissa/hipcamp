class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)
    @review.author = current_user
    @review.listing_id = params[:listing_id]
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 401
    end
  end

  def index
    if params[:listing_id]
      @reviews = Listing.find_by(id: params[:listing_id]).reviews
      render :index
    end
  end

  def show
    @review = Review.find_by(id: params[:id])
    render :show
  end

  def update
    @review = Review.find(params[:id])
    if @review.update(review_params)
      render :show
    else
      render json: @review.errors.full_messaages, status: 401
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
    render :show
  end

  private

  def review_params
    params.require(:review).permit(:created_at, :description)
  end
end
