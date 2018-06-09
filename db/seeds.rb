# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  User.destroy_all


  users = [
    {
      email_address: 'seedemail',
      first_name: 'Beyonce',
      last_name: 'Knowles',
      password: 'password'
    },
    {
      email_address: 'seedemail2',
      first_name: 'Kevin',
      last_name: 'Durant',
      password: 'password'
    }
  ]

  users.each do |user|
    User.create!(user)
  end
end

ActiveRecord::Base.transaction do
  Listing.destroy_all

  Listing.create!(
    host_id: User.find_by(first_name: "Beyonce").id,
    name: "Yosemite",
    description:"coding in Yosemite",
    address:"San Francisco, CA",
    daily_cost: 50,
    max_guest: 5,
    lat: 37.7749,
    lng: 122.4194,
    is_camping: true,
    allow_pets: false,
    is_wifi: true,
    is_toilets: true,
    is_showers: false,
    is_biking: true,
    is_fishing: false,
    is_paddling: false,
    is_horseback_riding: false,
    is_surfing: true,
    is_climbing: true,
    check_in_after: "4:00",
    check_out_before: "12:00",
    icon_url: "https://images.unsplash.com/photo-1500367215255-0e0b25b396af?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=193a2a1fa9c7ee1a2d4db00f22e41552&auto=format&fit=crop&w=1500&q=80"
)

  Listing.create!(
    host_id: User.find_by(first_name: "Kevin").id,
    name: "Muir Woods",
    description:"coding in muir woods",
    address:"San Francisco, CA",
    daily_cost: 100,
    max_guest: 3,
    lat: 40.7749,
    lng: 122.4194,
    is_camping: true,
    allow_pets: true,
    is_wifi: true,
    is_toilets: true,
    is_showers: false,
    is_biking: true,
    is_fishing: true,
    is_paddling: false,
    is_horseback_riding: false,
    is_surfing: true,
    is_climbing: true,
    check_in_after: "12:00",
    check_out_before: "4:00",
    icon_url: "https://images.unsplash.com/photo-1486999619268-6aa409dbecd1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f86046749a2c99bb728c6c72e4603f5a&auto=format&fit=crop&w=1500&q=80"
  )

  ListingPhoto.create!(
    listing_id: Listing.find_by(name: "Yosemite").id,
    image_url: "https://images.unsplash.com/photo-1500049242364-5f500807cdd7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=835b3fbc757d3cac3e8253f64888279e&auto=format&fit=crop&w=800&q=60",
    order: 1
  )

  ListingPhoto.create!(
    listing_id: Listing.find_by(name: "Yosemite").id,
    image_url: "https://images.unsplash.com/photo-1518623380242-d992d3c57b37?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=009a0fa0da7c86368e810557b7273dfb&auto=format&fit=crop&w=800&q=60",
    order: 2
  )

  ListingPhoto.create!(
    listing_id: Listing.find_by(name: "Muir Woods").id,
    image_url: "https://images.unsplash.com/photo-1507500844113-546121f3ac51?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6255ecea6ab0a14d8d84073af301e7fa&auto=format&fit=crop&w=1502&q=80",
    order: 1
  )

  ListingPhoto.create!(
    listing_id: Listing.find_by(name: "Muir Woods").id,
    image_url: "https://images.unsplash.com/photo-1521208728055-d69f6d428ccb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=570bbf33043d1d6dcc7f9e0d2eb3adb6&auto=format&fit=crop&w=800&q=60",
    order: 2
  )

end
