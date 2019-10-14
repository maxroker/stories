Rails.application.routes.draw do
	root 'pages#home'
	get '/home' => 'pages#home'
	get '/about' => 'pages#about'
    get '/contact' => 'signups#new'
    get 'signups/create'
    post '/contact' => 'signups#create'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
