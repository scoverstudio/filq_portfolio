source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.7.6'

gem 'bcrypt', '~> 3.1.7'
gem 'bootsnap', '>= 1.4.2', require: false
gem 'cancancan'
gem 'csr'
gem 'doorkeeper', '5.4.0'
gem 'httparty'
gem 'jbuilder', '~> 2.7'
gem 'pg'
gem 'puma', '~> 4.1'
gem 'pundit'
gem 'rack-cors'
gem 'rails', '~> 6.0.3', '>= 6.0.3.4'
gem 'rubyzip'
gem 'whenever', require: false
gem 'will_paginate', '~> 3.1.0'
gem 'dotenv-rails'
gem 'rails_12factor'
gem 'foreman'

group :development, :test do
  gem 'apipie-rails'
  gem 'byebug', platforms: %i[mri mingw x64_mingw]
  gem 'database_cleaner'
  gem 'dotenv-rails'
  gem 'factory_bot_rails'
  gem 'faker'
  gem 'parallel_tests'
  gem 'rubocop-rails', require: false
  gem 'simplecov', require: false
end

group :development do
  gem 'annotate'
  gem 'listen', '~> 3.2'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
