Rails.application.routes.draw do
  devise_for :users, :controllers => {:registrations => "registrations"}
  root 'pages#index'
  devise_scope:user do
   get 'login', to:'devise/sessions#new'
  end

  resources :posts do
    collection do
      get 'hobby'
      get 'habit'
      get 'team'
    end
  end
end
