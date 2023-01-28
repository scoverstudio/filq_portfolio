# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:

if Doorkeeper::Application.count.zero?
  Doorkeeper::Application.create!(name: 'React Client')
end

User.first_or_create!(email: 'admin@filq.com', password: 'test123', role: 'admin')
Playlist.create!(name: 'pl1', link: 'www.link.pl')

