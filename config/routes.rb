Rails.application.routes.draw do
  
  resources :follow_ups
  resources :meetings
  get 'welcome/index'  
  root 'meetings#index'
  
  
end
