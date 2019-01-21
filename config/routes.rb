Rails.application.routes.draw do
  
  resources :meetings do
    resources :follow_ups
  end
  devise_for :users
  get 'welcome/index'  
  root 'meetings#index'
  
  
end
