json.array! @playlists do |p|
  json.extract! p, :id, :name, :link, :isPortfolio
end
