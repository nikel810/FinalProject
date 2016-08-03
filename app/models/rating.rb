class Rating < ApplicationRecord
  belongs_to :user
  belongs_to :article

#  validates :rating, presence: true
#  validates_uniqueness_of :user_id, scope: [:video_id]

end
