class Meeting < ApplicationRecord 
  has_many :follow_ups

  accepts_nested_attributes_for :follow_ups 
  def to_s
    body
  end  
end
