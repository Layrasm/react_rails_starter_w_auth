

class User < ActiveRecord::Base
  extend Devise::Models

  has_many :images
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User
end
