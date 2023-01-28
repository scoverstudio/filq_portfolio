class AddIsPortfolioToPlaylists < ActiveRecord::Migration[6.0]
  def change
    add_column :playlists, :isPortfolio, :boolean
  end
end
