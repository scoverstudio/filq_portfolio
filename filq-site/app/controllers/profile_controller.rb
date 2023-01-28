class ProfileController < ApplicationController
  include CipherHelper

  def show
    current_user
  end

  def update
    current_user.update(user_params)
    render :show, status: :ok
  end


  private

  def user_params
    params.require(:user).permit(%i[email password])
  end
end