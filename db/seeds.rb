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
  ListingPhoto.destroy_all
  Reviews.destroy_all

  Listing.create!(
    host_id: User.find_by(first_name: "Beyonce").id,
    name: "Wawona Campgrounds",
    description:"Will add creative descirption later Lorem ipsum dolor sit amet, mei ea nisl nostrud contentiones, simul pertinacia nam ex. Ex animal malorum offendit vix, vitae denique ne sit. Assum iisque accusata te eam. Lucilius reprehendunt et mei, vix at suscipit legendos, sit volumus mediocrem ut. Fastidii intellegam vix ea.",
    address:"Yosemite",
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
    name: "Amphipod",
    description:"Will add creative description later Lorem ipsum dolor sit amet, mei ea nisl nostrud contentiones, simul pertinacia nam ex. Ex animal malorum offendit vix, vitae denique ne sit. Assum iisque accusata te eam. Lucilius reprehendunt et mei, vix at suscipit legendos, sit volumus mediocrem ut. Fastidii intellegam vix ea.",
    address:"Muir Woods",
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
  Listing.create!(
    host_id: User.find_by(first_name: "Beyonce").id,
    name: "Bridalveil Creek",
    description:"Will add creative descirption later Lorem ipsum dolor sit amet, mei ea nisl nostrud contentiones, simul pertinacia nam ex. Ex animal malorum offendit vix, vitae denique ne sit. Assum iisque accusata te eam. Lucilius reprehendunt et mei, vix at suscipit legendos, sit volumus mediocrem ut. Fastidii intellegam vix ea.",
    address:"Yosemite",
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
    icon_url: "https://images.unsplash.com/photo-1517979846761-7baf2d369cf2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5cba0fe3a1e6c99b155575652ded3a1c&auto=format&fit=crop&w=749&q=80"
)

Listing.create!(
  host_id: User.find_by(first_name: "Beyonce").id,
  name: "White Wolf",
  description:"Will add creative descirption later Lorem ipsum dolor sit amet, mei ea nisl nostrud contentiones, simul pertinacia nam ex. Ex animal malorum offendit vix, vitae denique ne sit. Assum iisque accusata te eam. Lucilius reprehendunt et mei, vix at suscipit legendos, sit volumus mediocrem ut. Fastidii intellegam vix ea.",
  address:"Yosemite",
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
  icon_url: "https://images.unsplash.com/photo-1518623380242-d992d3c57b37?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=009a0fa0da7c86368e810557b7273dfb&auto=format&fit=crop&w=500&q=60"
)

Listing.create!(
  host_id: User.find_by(first_name: "Beyonce").id,
  name: "Porcupine Flat",
  description:"Will add creative descirption later Lorem ipsum dolor sit amet, mei ea nisl nostrud contentiones, simul pertinacia nam ex. Ex animal malorum offendit vix, vitae denique ne sit. Assum iisque accusata te eam. Lucilius reprehendunt et mei, vix at suscipit legendos, sit volumus mediocrem ut. Fastidii intellegam vix ea.",
  address:"Yosemite",
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
  icon_url: "https://images.unsplash.com/photo-1517979846761-7baf2d369cf2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5cba0fe3a1e6c99b155575652ded3a1c&auto=format&fit=crop&w=749&q=80"
)

Listing.create!(
  host_id: User.find_by(first_name: "Beyonce").id,
  name: "Red Snow",
  description:"Will add creative descirption later Lorem ipsum dolor sit amet, mei ea nisl nostrud contentiones, simul pertinacia nam ex. Ex animal malorum offendit vix, vitae denique ne sit. Assum iisque accusata te eam. Lucilius reprehendunt et mei, vix at suscipit legendos, sit volumus mediocrem ut. Fastidii intellegam vix ea.",
  address:"Muir Woods",
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
  icon_url: "https://images.unsplash.com/photo-1502943693086-33b5b1cfdf2f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f44e1437b88e3bdfdc9abfb98bc1b8cf&auto=format&fit=crop&w=500&q=60"
)

Listing.create!(
  host_id: User.find_by(first_name: "Beyonce").id,
  name: "Misty Hill",
  description:"Will add creative descirption later Lorem ipsum dolor sit amet, mei ea nisl nostrud contentiones, simul pertinacia nam ex. Ex animal malorum offendit vix, vitae denique ne sit. Assum iisque accusata te eam. Lucilius reprehendunt et mei, vix at suscipit legendos, sit volumus mediocrem ut. Fastidii intellegam vix ea.",
  address:"Muir Woods",
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
  icon_url: "https://images.unsplash.com/photo-1480444423787-9ea7b1509c54?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5b5d4b1832194f5e9847aaeb247622f5&auto=format&fit=crop&w=500&q=60"
)

  ListingPhoto.create!(
    listing_id: Listing.find_by(name: "Wawona Campgrounds").id,
    image_url: "https://images.unsplash.com/photo-1500049242364-5f500807cdd7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=835b3fbc757d3cac3e8253f64888279e&auto=format&fit=crop&w=800&q=60",
    order: 1
  )

  ListingPhoto.create!(
    listing_id: Listing.find_by(name: "Wawona Campgrounds").id,
    image_url: "https://images.unsplash.com/photo-1518623380242-d992d3c57b37?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=009a0fa0da7c86368e810557b7273dfb&auto=format&fit=crop&w=800&q=60",
    order: 2
  )

  ListingPhoto.create!(
    listing_id: Listing.find_by(name: "Amphipod").id,
    image_url: "https://images.unsplash.com/photo-1507500844113-546121f3ac51?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6255ecea6ab0a14d8d84073af301e7fa&auto=format&fit=crop&w=1502&q=80",
    order: 1
  )

  ListingPhoto.create!(
    listing_id: Listing.find_by(name: "Amphipod").id,
    image_url: "https://images.unsplash.com/photo-1521208728055-d69f6d428ccb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=570bbf33043d1d6dcc7f9e0d2eb3adb6&auto=format&fit=crop&w=800&q=60",
    order: 2
  )

  ListingPhoto.create!(
    listing_id: Listing.find_by(name: "Red Snow").id,
    image_url: "https://images.unsplash.com/photo-1507500844113-546121f3ac51?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6255ecea6ab0a14d8d84073af301e7fa&auto=format&fit=crop&w=1502&q=80",
    order: 1
  )

  ListingPhoto.create!(
    listing_id: Listing.find_by(name: "Red Snow").id,
    image_url: "https://images.unsplash.com/photo-1510463145325-121853befb54?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=55dbcac77e4a0662a269c6508a85be76&auto=format&fit=crop&w=500&q=60",
    order: 2
  )

  ListingPhoto.create!(
    listing_id: Listing.find_by(name: "Misty Hill").id,
    image_url: "https://images.unsplash.com/photo-1486435286105-07c4f2698498?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=926403f67fce685ee674ec33e5fad617&auto=format&fit=crop&w=500&q=60",
    order: 2
  )

  ListingPhoto.create!(
    listing_id: Listing.find_by(name: "Misty Hill").id,
    image_url: "https://images.unsplash.com/photo-1519058454075-e16cb18dd56d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cb9e4af886c93da5e89b6b3dbd163490&auto=format&fit=crop&w=500&q=60",
    order: 3
  )


end
