Rails.application.routes.draw do
  
  devise_for :users
  get 'welcome/index'
  get 'all', to: 'welcome#index'
  resources :articles, only: [:create, :show]
  root 'welcome#index'


  
  
end
