Rails.application.routes.draw do
  
  resources :meetings
  get 'welcome/index'  
  root 'welcome#index'
  
  
end
