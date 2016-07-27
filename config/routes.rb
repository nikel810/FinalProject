Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #welcome page
  get '/', to: 'users#home'
  post '/signup', to: 'users#create_user'
  get '/login', to: 'sessions#create_session'
  post '/login', to: 'sessions#create_session'
  delete '/logout', to: 'sessions#destroy_session'
  get '/timeline', to: 'articles#timeline'

  #timeline
  get '/profile', to: 'users#profile'
end
