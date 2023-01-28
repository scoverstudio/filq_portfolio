class UsersController < ApplicationController
  before_action :doorkeeper_authorize!
  load_and_authorize_resource

  def index
    @users = User.all
    render :index, status: :ok
  end

  def show; end

  def create
    @user.save!
    render :show, status: :ok
  end

  def update
    @user.update!(user_params)
    render :show, status: :ok
  end

  def destroy
    @user.destroy!
  end

  private

  ALLOWED_PARAMS = [
    :email,
    :password,
    :role
  ]

  def user_params
    params.require(:user).permit(ALLOWED_PARAMS)
  end
end
