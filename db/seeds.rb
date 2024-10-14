# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
Property.create!({
  name: 'Mughal Heights',
  description: 'located in the city of gardens',
  headline: 'a property with heritage value',
  address_1: 'Inside Delhi Gate Lahore',
  address_2: 'Inside Chuna Mandi',
  city: 'Lahore',
  state: 'Punjab',
  country: 'Pakistan'
})

Property.create!({
  name: 'Mongol Heights',
  description: 'located in the city of gardens',
  headline: 'a property with heritage value',
  address_1: 'Inside Delhi Gate Lahore',
  address_2: 'Inside Chuna Mandi',
  city: 'Lahore',
  state: 'Punjab',
  country: 'Pakistan'
})

Property.create!({
  name: 'Mian Heights',
  description: 'located in the city of gardens',
  headline: 'a property with heritage value',
  address_1: 'Inside Delhi Gate Lahore',
  address_2: 'Inside Chuna Mandi',
  city: 'Lahore',
  state: 'Punjab',
  country: 'Pakistan'
})