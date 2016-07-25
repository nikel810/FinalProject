class User < ApplicationRecord
  has_many :articles

  has_secure_password #for activating bcrypt
  validates :name, presence: true
  validates :email, presence: true, uniqueness: true

end
