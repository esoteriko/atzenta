class FollowUp < ApplicationRecord
  belongs_to :meeting
  
  def to_s
    body
  end
end
