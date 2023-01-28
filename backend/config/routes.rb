Rails.application.routes.draw do
  scope :api, defaults: { format: :json } do
    use_doorkeeper
    resources :users, only: %i[index show create update destroy]
    resources :playlists
    get '/profile', to: 'profile#show'
    put '/profile', to: 'profile#update'
  end
end
