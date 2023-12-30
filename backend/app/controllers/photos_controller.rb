class PhotosController < ApplicationController
  before_action :set_photo, only: %i[ show update destroy ]

  def index
    @photos = Photo.all
  end

  def show
  end

  def create
    @photo = Photo.create!(photo_params)
    render :show, status: :created
  end

  def update
    if @photo.update(playlist_params)
      render :show, status: :ok, location: @photo
    else
      render json: @photo.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @photo.destroy
  end

  private

  def set_photo
    @photo = Photo.find(params[:id])
  end

  def photo_params
    params.require(:photo).permit(:name, :link, :height, :width)
  end
end
