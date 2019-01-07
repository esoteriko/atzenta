Rails.application.routes.draw do
  
  devise_for :users 
    resources :meetings
  resources :follow_ups
  get 'welcome/index'  
  root 'meetings#index'
  
  
end
