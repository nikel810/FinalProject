Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/', to: 'users#home'
  post '/signup', to: 'users#create_user'
  get '/login', to: 'sessions#create_session'
  post '/login', to: 'sessions#create_session'
  delete '/logout', to: 'sessions#destroy_session'
  get '/timeline', to: 'articles#timeline'
  get '/profile/:id', to: 'users#profile', as: 'profile'
  post '/profile/add_article', to: 'articles#create'

  post '/article/:id/post_rating', to: 'articles#post_rating'
  delete '/article/:id/delete_rating', to: 'articles#delete_rating'
end
