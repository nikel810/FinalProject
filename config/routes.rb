Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/', to: 'users#home'
  post '/signup' => 'users#create'
  post '/login' => 'sessions#create'
  delete '/logout' => 'sessions#destroy'
  get '/timeline', to: 'users#timeline'

end
