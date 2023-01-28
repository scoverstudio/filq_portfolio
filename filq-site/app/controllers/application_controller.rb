class ApplicationController < ActionController::API
  def current_user
    @current_user ||= if doorkeeper_token
                        User.find_by(id: doorkeeper_token[:resource_owner_id])
                      else
                        User.find_by(id: 1)
                      end
  end
end
