class Meeting < ApplicationRecord 
  belongs_to :user
  has_many :follow_ups, dependent: :destroy 

  accepts_nested_attributes_for :follow_ups 
    
  
end
