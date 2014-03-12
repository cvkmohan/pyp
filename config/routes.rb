Pyp::Application.routes.draw do
  #root :to => "home#index"
  devise_for :users, :controllers => {:registrations => "registrations"}
  resources :users

  get '/home' => 'pages#index'
  get '/dashboard' => 'pages#index'
  get '/challenge' => 'pages#challenge'
  get '/player' => 'pages#player'
  get '/player/content' => 'pages#content'

  get '/player/language' => 'pages#language'

  post '/player/solve' => 'pages#solve'

  get '/learn' => 'pages#learner'
  get '/simulation' => 'pages#simulation'
  get '/explanation' => 'pages#explanation'
  get '/visited' => 'pages#visited'
  get '/introduction' => 'pages#introduction'

  root 'home#index'
end