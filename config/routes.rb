Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only:[:show, :create]
    resource :session, only: [:create, :destroy, :show]
    resources :listings, only: [:index, :show, :create] do
      resources :bookings, only: [:new, :create]
      resources :reviews, only: [:create, :index, :update]
    end
    resources :bookings, only: [:destroy, :show]
    resources :reviews, only: [:show, :destroy]
    resources :listing_searches, only: [:index]
  end
  root "static_pages#root"
end
