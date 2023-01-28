class User < ApplicationRecord
  has_secure_password

  enum role: %i[user admin]

  has_many :access_grants,
           class_name: 'Doorkeeper::AccessGrant',
           foreign_key: :resource_owner_id,
           dependent: :delete_all

  has_many :access_tokens,
           class_name: 'Doorkeeper::AccessToken',
           foreign_key: :resource_owner_id,
           dependent: :delete_all

  class << self
    def authenticate(email, password)
      user = User.find_by(email: email)
      if user&.authenticate(password)
        user
      else
        raise Doorkeeper::Errors::InvalidGrantReuse
      end
    end
  end
end
