Rails.application.routes.draw do
  
  get 'welcome/index'
  resources :articles
  resources :meetings
  root 'welcome#index'
  
  
end
