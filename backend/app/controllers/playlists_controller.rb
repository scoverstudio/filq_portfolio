class PlaylistsController < ApplicationController
  before_action :set_playlist, only: %i[ show update destroy ]

  def index
    @playlists = Playlist.all
  end

  def show
  end

  def create
    @playlist = Playlist.create!(playlist_params)
    render :show, status: :created
  end

  def update
    if @playlist.update(playlist_params)
      render :show, status: :ok, location: @playlist
    else
      render json: @playlist.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @playlist.destroy
  end

  private

  def set_playlist
    @playlist = Playlist.find(params[:id])
  end

  def playlist_params
    params.require(:playlist).permit(:name, :link, :isPortfolio)
  end
end
