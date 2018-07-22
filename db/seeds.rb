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
    },
    {
      email_address: 'seedemail3',
      first_name: 'Sheryl',
      last_name: 'Sandberg',
      password: 'password'
    },
    {
      email_address: 'seedemail4',
      first_name: 'Amy',
      last_name: 'Woodson',
      password: 'password'
    },
    {
      email_address: 'seedemail5',
      first_name: 'Caleb',
      last_name: 'Bass',
      password: 'password'
    },
    {
      email_address: 'seedemail6',
      first_name: 'Serena',
      last_name: 'Mays',
      password: 'password'
    },
    {
      email_address: 'seedemail7',
      first_name: 'Alexis',
      last_name: 'Aniston',
      password: 'password'
    },
    {
      email_address: 'seedemail8',
      first_name: 'Ryan',
      last_name: 'Reynolds',
      password: 'password'
    },
    {
      email_address: 'seedemail9',
      first_name: 'Chad',
      last_name: 'Jefferson',
      password: 'password'
    },
    {
      email_address: 'seedemail10',
      first_name: 'Sahar',
      last_name: 'Carlson',
      password: 'password'
    },
    {
      email_address: 'seedemail11',
      first_name: 'Nathan',
      last_name: 'Carlson',
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
  Review.destroy_all


  Listing.create!(
    host_id: User.find_by(first_name: "Serena").id,
    name: "Wawona Campgrounds",
    description:"The clouds and sunsets at our hilltop vista point can be magnificent. The campfire at the visitor center still feels sooo great. Mosquitoes are definitely around...we admit it, so come prepared. Join us for a natural season of wildness and gathering at one of our Walk-in campsites. Tent camp spots on the Navy’s oldest ammunition depot in the Pacific, are guaranteed to be eclectic and unique!",
    address:"North Beach",
    daily_cost: 50,
    max_guest: 5,
    lat: 37.7947284731866,
    lng: -122.411727905273,
    is_camping: false,
    allow_pets: false,
    is_wifi: true,
    is_toilets: true,
    is_showers: true,
    is_biking: true,
    is_fishing: true,
    is_paddling: true,
    is_horseback_riding: true,
    is_surfing: true,
    is_climbing: true,
    check_in_after: "4:00",
    check_out_before: "12:00",
    icon_url: "https://images.unsplash.com/photo-1500367215255-0e0b25b396af?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=193a2a1fa9c7ee1a2d4db00f22e41552&auto=format&fit=crop&w=1500&q=80"
)

  Listing.create!(
    host_id: User.find_by(first_name: "Ryan").id,
    name: "Amphipod",
    description:"The clouds and sunsets at our hilltop vista point can be magnificent. The campfire at the visitor center still feels sooo great. Mosquitoes are definitely around...we admit it, so come prepared. Join us for a natural season of wildness and gathering at one of our Walk-in campsites. Tent camp spots on the Navy’s oldest ammunition depot in the Pacific, are guaranteed to be eclectic and unique!",
    address:"North Beach",
    daily_cost: 100,
    max_guest: 3,
    lat: 37.801156,
    lng: -122.403950,
    is_camping: false,
    allow_pets: true,
    is_wifi: true,
    is_toilets: true,
    is_showers: true,
    is_biking: true,
    is_fishing: true,
    is_paddling: true,
    is_horseback_riding: false,
    is_surfing: true,
    is_climbing: true,
    check_in_after: "11:00",
    check_out_before: "4:00",
    icon_url: "https://images.unsplash.com/photo-1486999619268-6aa409dbecd1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f86046749a2c99bb728c6c72e4603f5a&auto=format&fit=crop&w=1500&q=80"
  )
  Listing.create!(
    host_id: User.find_by(first_name: "Chad").id,
    name: "Bridalveil Creek",
    description:"While the Preserve is a a vibrant and spectacular natural, scenic, historic and cultural land, it is not protected forever as parkland. Your stay helps us make a strong case for a permanent park on the 300 acres of wildlands of the Navy’s now closed oldest ammunition depot in the West, with 7-county panoramic views of the Bay Area. The Preserve is grassroots and volunteer-run with no funding from the owner, the City of Vallejo. We are so excited to share our second yurt campsite and, recently, we added a caravan style tiny house camp across the way from your yurt camp. ",
    address:"Mission",
    daily_cost: 25,
    max_guest: 5,
    lat: 37.7599,
    lng: -122.4148,
    is_camping: true,
    allow_pets: false,
    is_wifi: false,
    is_toilets: false,
    is_showers: false,
    is_biking: true,
    is_fishing: true,
    is_paddling: true,
    is_horseback_riding: true,
    is_surfing: true,
    is_climbing: true,
    check_in_after: "3:00",
    check_out_before: "5:00",
    icon_url: "https://images.unsplash.com/photo-1517979846761-7baf2d369cf2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5cba0fe3a1e6c99b155575652ded3a1c&auto=format&fit=crop&w=749&q=80"
)

Listing.create!(
  host_id: User.find_by(first_name: "Ryan").id,
  name: "White Wolf",
  description: "Our campsite is the best! The campfire at the visitor center still feels sooo great. Mosquitoes are definitely around...we admit it, so come prepared. The clouds and sunsets at our hilltop vista point can be magnificent. The campfire at the visitor center still feels sooo great. Mosquitoes are definitely around...we admit it, so come prepared. Join us for a natural season of wildness and gathering at one of our Walk-in campsites. Tent camp spots on the Navy’s oldest ammunition depot in the Pacific, are guaranteed to be eclectic and unique!",
  address:"Mission",
  daily_cost: 20,
  max_guest: 5,
  lat: 37.7529,
  lng: -122.4088,
  is_camping: true,
  allow_pets: true,
  is_wifi: false,
  is_toilets: false,
  is_showers: false,
  is_biking: true,
  is_fishing: true,
  is_paddling: true,
  is_horseback_riding: true,
  is_surfing: true,
  is_climbing: true,
  check_in_after: "4:00",
  check_out_before: "12:00",
  icon_url: "https://images.unsplash.com/photo-1518623380242-d992d3c57b37?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=009a0fa0da7c86368e810557b7273dfb&auto=format&fit=crop&w=500&q=60"
)



Listing.create!(
  host_id: User.find_by(first_name: "Alexis").id,
  name: "Porcupine Flat",
  description: "Very peaceful and private immersion into the beautiful wild lands of the Coast. Amazing! Views! of Ocean and Coastal mountains. The campfire at the visitor center still feels sooo great. Mosquitoes are definitely around...we admit it, so come prepared. The clouds and sunsets at our hilltop vista point can be magnificent. The campfire at the visitor center still feels sooo great. Mosquitoes are definitely around...we admit it, so come prepared. Join us for a natural season of wildness and gathering at one of our Walk-in campsites. Tent camp spots on the Navy’s oldest ammunition depot in the Pacific, are guaranteed to be eclectic and unique!",
  address:"Marina",
  daily_cost: 50,
  max_guest: 5,
  lat: 37.8037,
  lng: -122.4368,
  is_camping: false,
  allow_pets: false,
  is_wifi: true,
  is_toilets: true,
  is_showers: true,
  is_biking: true,
  is_fishing: false,
  is_paddling: false,
  is_horseback_riding: false,
  is_surfing: true,
  is_climbing: true,
  check_in_after: "2:00",
  check_out_before: "5:00",
  icon_url: "https://images.unsplash.com/photo-1517979846761-7baf2d369cf2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5cba0fe3a1e6c99b155575652ded3a1c&auto=format&fit=crop&w=749&q=80"
)



Listing.create!(
  host_id: User.find_by(first_name: "Serena").id,
  name: "Red Snow",
  description:"Come join us at our amazing campsite! The campfire at the visitor center still feels sooo great. Mosquitoes are definitely around...we admit it, so come prepared. The clouds and sunsets at our hilltop vista point can be magnificent. The campfire at the visitor center still feels sooo great. Mosquitoes are definitely around...we admit it, so come prepared. Join us for a natural season of wildness and gathering at one of our Walk-in campsites. Tent camp spots on the Navy’s oldest ammunition depot in the Pacific, are guaranteed to be eclectic and unique!",
  address:"Marina",
  daily_cost: 50,
  max_guest: 5,
  lat: 37.7977,
  lng: -122.4308,
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
  host_id: User.find_by(first_name: "Ryan").id,
  name: "Misty Hill",
  description:"While the Preserve is a a vibrant and spectacular natural, scenic, historic and cultural land, it is not protected forever as parkland. Your stay helps us make a strong case for a permanent park on the 300 acres of wildlands of the Navy’s now closed oldest ammunition depot in the West, with 7-county panoramic views of the Bay Area. The Preserve is grassroots and volunteer-run with no funding from the owner, the City of Vallejo. We are so excited to share our second yurt campsite and, recently, we added a caravan style tiny house camp across the way from your yurt camp. ",
  address:"Sunset",
  daily_cost: 50,
  max_guest: 5,
  lat: 37.7467,
  lng: -122.4863,
  is_camping: true,
  allow_pets: true,
  is_wifi: true,
  is_toilets: true,
  is_showers: true,
  is_biking: true,
  is_fishing: true,
  is_paddling: true,
  is_horseback_riding: true,
  is_surfing: true,
  is_climbing: true,
  check_in_after: "4:00",
  check_out_before: "12:00",
  icon_url: "https://images.unsplash.com/photo-1480444423787-9ea7b1509c54?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5b5d4b1832194f5e9847aaeb247622f5&auto=format&fit=crop&w=500&q=60"
)

Listing.create!(
  host_id: User.find_by(first_name: "Alexis").id,
  name: "Cotton Hills",
  description: "Very peaceful and private immersion into the beautiful wild lands of the Coast. Amazing! Views! of Ocean and Coastal mountains. The campfire at the visitor center still feels sooo great. Mosquitoes are definitely around...we admit it, so come prepared. ",
  address:"Sunset",
  daily_cost: 150,
  max_guest: 5,
  lat: 37.7407,
  lng: -122.4803,
  is_camping: false,
  allow_pets: false,
  is_wifi: true,
  is_toilets: true,
  is_showers: true,
  is_biking: true,
  is_fishing: true,
  is_paddling: true,
  is_horseback_riding: true,
  is_surfing: true,
  is_climbing: true,
  check_in_after: "4:00",
  check_out_before: "12:00",
  icon_url: "https://images.unsplash.com/photo-1516572882656-dc5249697fc2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=029f162e52cec4e5446d40636fe11f32&auto=format&fit=crop&w=500&q=60"
)

Listing.create!(
  host_id: User.find_by(first_name: "Serena").id,
  name: "Dancing Disco",
  description: "If you are reading this, you should camp at our site! The campfire at the visitor center still feels sooo great. Mosquitoes are definitely around...we admit it, so come prepared. ",
  address:"Castro",
  daily_cost: 50,
  max_guest: 5,
  lat: 37.7609,
  lng: -122.4350,
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
  icon_url: "https://images.unsplash.com/photo-1498429089284-41f8cf3ffd39?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=91f0fc08cef6f3bfbb32b3adf0065f39&auto=format&fit=crop&w=500&q=60"
)

Listing.create!(
  host_id: User.find_by(first_name: "Amy").id,
  name: "Evergreen",
  description: "The Warriors camped here last weekend. The clouds and sunsets at our hilltop vista point can be magnificent. The campfire at the visitor center still feels sooo great. Mosquitoes are definitely around...we admit it, so come prepared. Join us for a natural season of wildness and gathering at one of our Walk-in campsites. Tent camp spots on the Navy’s oldest ammunition depot in the Pacific, are guaranteed to be eclectic and unique!",
  address:"Castro",
  daily_cost: 15,
  max_guest: 3,
  lat: 37.7549,
  lng: -122.4290,
  is_camping: true,
  allow_pets: true,
  is_wifi: false,
  is_toilets: false,
  is_showers: false,
  is_biking: true,
  is_fishing: false,
  is_paddling: false,
  is_horseback_riding: false,
  is_surfing: false,
  is_climbing: false,
  check_in_after: "4:00",
  check_out_before: "12:00",
  icon_url: "https://images.unsplash.com/photo-1480499484268-a85a2414da81?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6d765c5039bd6d36022739e3a6552c44&auto=format&fit=crop&w=500&q=60"
)


Listing.create!(
  host_id: User.find_by(first_name: "Amy").id,
  name: "Firnwood Cedar",
  description:"Our location is circled by young oak, pinze, manzanita, remove, private and beautfiul",
  address:"Presdio",
  daily_cost: 50,
  max_guest: 5,
  lat: 37.7989,
  lng: -122.4662,
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
  icon_url: "https://images.unsplash.com/photo-1522416263954-d5de6077e321?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0b8a5d13896a337d0a5f09e27121d7c4&auto=format&fit=crop&w=500&q=60"
)

Listing.create!(
  host_id: User.find_by(first_name: "Amy").id,
  name: "Amster Cellar",
  description:"Our location is circled by young oak, pinze, manzanita, remove, private and beautfiul. The clouds and sunsets at our hilltop vista point can be magnificent. The campfire at the visitor center still feels sooo great. Mosquitoes are definitely around...we admit it, so come prepared. Join us for a natural season of wildness and gathering at one of our Walk-in campsites. Tent camp spots on the Navy’s oldest ammunition depot in the Pacific, are guaranteed to be eclectic and unique!",
  address:"Richmond",
  daily_cost: 50,
  max_guest: 5,
  lat: 37.7797,
  lng: -122.4829,
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
  icon_url: "https://images.unsplash.com/photo-1522416263954-d5de6077e321?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0b8a5d13896a337d0a5f09e27121d7c4&auto=format&fit=crop&w=500&q=60"
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
    listing_id: Listing.find_by(name: "Cotton Hills").id,
    image_url: "https://images.unsplash.com/photo-1519058454075-e16cb18dd56d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cb9e4af886c93da5e89b6b3dbd163490&auto=format&fit=crop&w=500&q=60",
    order: 3
  )

  ListingPhoto.create!(
    listing_id: Listing.find_by(name: "Dancing Disco").id,
    image_url: "https://images.unsplash.com/photo-1507500844113-546121f3ac51?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6255ecea6ab0a14d8d84073af301e7fa&auto=format&fit=crop&w=1502&q=80",
    order: 1
  )

  ListingPhoto.create!(
    listing_id: Listing.find_by(name: "Evergreen").id,
    image_url: "https://images.unsplash.com/photo-1510463145325-121853befb54?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=55dbcac77e4a0662a269c6508a85be76&auto=format&fit=crop&w=500&q=60",
    order: 2
  )

  ListingPhoto.create!(
    listing_id: Listing.find_by(name: "Firnwood Cedar").id,
    image_url: "https://images.unsplash.com/photo-1486435286105-07c4f2698498?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=926403f67fce685ee674ec33e5fad617&auto=format&fit=crop&w=500&q=60",
    order: 2
  )

  ListingPhoto.create!(
    listing_id: Listing.find_by(name: "Cotton Hills").id,
    image_url: "https://images.unsplash.com/photo-1487149506474-cbf9196c4f9f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=541883e5cca156202955c073d1f60eef&auto=format&fit=crop&w=500&q=60",
    order: 3
  )

  ListingPhoto.create!(
    listing_id: Listing.find_by(name: "Dancing Disco").id,
    image_url: "https://images.unsplash.com/photo-1500049242364-5f500807cdd7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=835b3fbc757d3cac3e8253f64888279e&auto=format&fit=crop&w=800&q=60",
    order: 1
  )

  ListingPhoto.create!(
    listing_id: Listing.find_by(name: "Evergreen").id,
    image_url: "https://images.unsplash.com/photo-1518623380242-d992d3c57b37?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=009a0fa0da7c86368e810557b7273dfb&auto=format&fit=crop&w=800&q=60",
    order: 2
  )

  ListingPhoto.create!(
    listing_id: Listing.find_by(name: "Firnwood Cedar").id,
    image_url: "https://images.unsplash.com/photo-1507500844113-546121f3ac51?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6255ecea6ab0a14d8d84073af301e7fa&auto=format&fit=crop&w=1502&q=80",
    order: 1
  )

  ListingPhoto.create!(
    listing_id: Listing.find_by(name: "White Wolf").id,
    image_url: "https://images.unsplash.com/photo-1521208728055-d69f6d428ccb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=570bbf33043d1d6dcc7f9e0d2eb3adb6&auto=format&fit=crop&w=800&q=60",
    order: 2
  )

  ListingPhoto.create!(
    listing_id: Listing.find_by(name: "White Wolf").id,
    image_url: "https://images.unsplash.com/photo-1507500844113-546121f3ac51?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6255ecea6ab0a14d8d84073af301e7fa&auto=format&fit=crop&w=1502&q=80",
    order: 1
  )

  ListingPhoto.create!(
    listing_id: Listing.find_by(name: "Porcupine Flat").id,
    image_url: "https://images.unsplash.com/photo-1487149506474-cbf9196c4f9f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=541883e5cca156202955c073d1f60eef&auto=format&fit=crop&w=500&q=60",
    order: 2
  )

  ListingPhoto.create!(
    listing_id: Listing.find_by(name: "Porcupine Flat").id,
    image_url: "https://images.unsplash.com/photo-1505027593521-2436e2dbe299?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7165b20d98851219a4e11f93ab5f5115&auto=format&fit=crop&w=500&q=60",
    order: 1
  )

  ListingPhoto.create!(
    listing_id: Listing.find_by(name: "Bridalveil Creek").id,
    image_url: "https://images.unsplash.com/photo-1513025186107-2688cad44a98?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0622725accc424a8a061f705a3495882&auto=format&fit=crop&w=500&q=60",
    order: 2
  )

  ListingPhoto.create!(
    listing_id: Listing.find_by(name: "Bridalveil Creek").id,
    image_url: "https://images.unsplash.com/photo-1493160612397-4a7813290efd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bb0d75ef7d64705637b089b06e21b651&auto=format&fit=crop&w=500&q=60",
    order: 1
  )

  ListingPhoto.create!(
    listing_id: Listing.find_by(name: "Misty Hill").id,
    image_url: "https://images.unsplash.com/photo-1493160612397-4a7813290efd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bb0d75ef7d64705637b089b06e21b651&auto=format&fit=crop&w=500&q=60",
    order: 1
  )

  ListingPhoto.create!(
    listing_id: Listing.find_by(name: "Amster Cellar").id,
    image_url: "https://images.unsplash.com/photo-1493160612397-4a7813290efd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bb0d75ef7d64705637b089b06e21b651&auto=format&fit=crop&w=500&q=60",
    order: 1
  )

  ListingPhoto.create!(
    listing_id: Listing.find_by(name: "Amster Cellar").id,
    image_url: "https://images.unsplash.com/photo-1487149506474-cbf9196c4f9f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=541883e5cca156202955c073d1f60eef&auto=format&fit=crop&w=500&q=60",
    order: 2
  )




  Review.create!(
    listing_id: Listing.find_by(name: "Wawona Campgrounds").id,
    description: 'This is a special piece of land that is being lovingly restored.... both back to nature and to showcase the history of the land. There is lots to explore and great trails to hike. Myrna is a very welcoming and lovely host.... be sure to hang out by the camp fire at night to get to meet her!',
    author_id: User.find_by(first_name: "Kevin").id
  )

  Review.create!(
    listing_id: Listing.find_by(name: "Wawona Campgrounds").id,
    description: ' went above and beyond to accommodate our group, and provided helpful amenities like water, firewood, and even chocolate! The site itself is incredible, with ocean views and (and sounds!). The tipi was a savior during the cold and windy night, and there was plenty of space to pitch our two additional tents.',
    author_id: User.find_by(first_name: "Beyonce").id
  )

  Review.create!(
    listing_id: Listing.find_by(name: "Amphipod").id,
    description: 'What an awesome place to stay! Beyonce was a super helpful host and we had just everything we needed and more. I would recommend this place to anybody',
    author_id: User.find_by(first_name: "Sheryl").id
  )

  Review.create!(
    listing_id: Listing.find_by(name: "Amphipod").id,
    description: 'Great spot to camp. Was very welcoming, he showed us around his lovely property then just left us to it. The site had everything we needed for the night and would happily stay again.',
    author_id: User.find_by(first_name: "Kevin").id
  )

  Review.create!(
    listing_id: Listing.find_by(name: "Bridalveil Creek").id,
    description: 'We really enjoyed our stay. Greg was super communicative and the place is just beautiful.',
    author_id: User.find_by(first_name: "Sheryl").id
  )

  Review.create!(
    listing_id: Listing.find_by(name: "Bridalveil Creek").id,
    description: 'a magical place. As soon as you enter the first gate, you are met by friendly horses and expansive views. The positive energy of the land is infectious! Also a great spot for larger groups as there is tons of flat areas to camp and a really cool area built specifically to protect you from the wind',
    author_id: User.find_by(first_name: "Caleb").id
  )

  Review.create!(
    listing_id: Listing.find_by(name: "White Wolf").id,
    description: 'So glad I stumbled across this gem!',
    author_id: User.find_by(first_name: "Serena").id
  )

  Review.create!(
    listing_id: Listing.find_by(name: "White Wolf").id,
    description: 'Great place for a relaxing weekend away from the city but not too far. Host was awesome and very responsive :-) Two thumbs up on all front!!',
    author_id: User.find_by(first_name: "Sheryl").id
  )

  Review.create!(
    listing_id: Listing.find_by(name: "Porcupine Flat").id,
    description: 'This is a special piece of land that is being lovingly restored.... both back to nature and to showcase the history of the land. There is lots to explore and great trails to hike. Myrna is a very welcoming and lovely host.... be sure to hang out by the camp fire at night to get to meet her!',
    author_id: User.find_by(first_name: "Amy").id
  )



  Review.create!(
    listing_id: Listing.find_by(name: "Porcupine Flat").id,
    description: 'a magical place. As soon as you enter the first gate, you are met by friendly horses and expansive views. The positive energy of the land is infectious! Also a great spot for larger groups as there is tons of flat areas to camp and a really cool area built specifically to protect you from the wind',
    author_id: User.find_by(first_name: "Caleb").id
  )

  Review.create!(
    listing_id: Listing.find_by(name: "Red Snow").id,
    description: 'So glad I stumbled across this gem!',
    author_id: User.find_by(first_name: "Amy").id
  )

  Review.create!(
    listing_id: Listing.find_by(name: "Red Snow").id,
    description: 'honestly the most beautiful campsite I have ever been to!! There was some rain the day we were set to camp and we almost cancelled our plans, but are SO glad we did not. The property is beautiful by nature and absolutely beautifully kept -- no trash, well kept pavillions and probably the cleanest outhouse you will ever find. The sites look down over the valley and mountains, giving an incredible sunset experience. ',
    author_id: User.find_by(first_name: "Amy").id
  )


  Review.create!(
    listing_id: Listing.find_by(name: "Misty Hill").id,
    description: 'This is a special piece of land that is being lovingly restored.... both back to nature and to showcase the history of the land. There is lots to explore and great trails to hike. Myrna is a very welcoming and lovely host.... be sure to hang out by the camp fire at night to get to meet her!',
    author_id: User.find_by(first_name: "Kevin").id
  )

  Review.create!(
    listing_id: Listing.find_by(name: "Misty Hill").id,
    description: ' went above and beyond to accommodate our group, and provided helpful amenities like water, firewood, and even chocolate! The site itself is incredible, with ocean views and (and sounds!). The tipi was a savior during the cold and windy night, and there was plenty of space to pitch our two additional tents.',
    author_id: User.find_by(first_name: "Beyonce").id
  )

  Review.create!(
    listing_id: Listing.find_by(name: "Cotton Hills").id,
    description: 'honestly the most beautiful campsite I have ever been to!! There was some rain the day we were set to camp and we almost cancelled our plans, but are SO glad we did not. The property is beautiful by nature and absolutely beautifully kept -- no trash, well kept pavillions and probably the cleanest outhouse you will ever find. The sites look down over the valley and mountains, giving an incredible sunset experience. ',
    author_id: User.find_by(first_name: "Amy").id
  )


  Review.create!(
    listing_id: Listing.find_by(name: "Cotton Hills").id,
    description: 'This is a special piece of land that is being lovingly restored.... both back to nature and to showcase the history of the land. There is lots to explore and great trails to hike. Myrna is a very welcoming and lovely host.... be sure to hang out by the camp fire at night to get to meet her!',
    author_id: User.find_by(first_name: "Kevin").id
  )

  Review.create!(
    listing_id: Listing.find_by(name: "Cotton Hills").id,
    description: ' went above and beyond to accommodate our group, and provided helpful amenities like water, firewood, and even chocolate! The site itself is incredible, with ocean views and (and sounds!). The tipi was a savior during the cold and windy night, and there was plenty of space to pitch our two additional tents.',
    author_id: User.find_by(first_name: "Sheryl").id
  )

  Review.create!(
    listing_id: Listing.find_by(name: "Dancing Disco").id,
    description: 'honestly the most beautiful campsite I have ever been to!! There was some rain the day we were set to camp and we almost cancelled our plans, but are SO glad we did not. The property is beautiful by nature and absolutely beautifully kept -- no trash, well kept pavillions and probably the cleanest outhouse you will ever find. The sites look down over the valley and mountains, giving an incredible sunset experience. ',
    author_id: User.find_by(first_name: "Amy").id
  )


  Review.create!(
    listing_id: Listing.find_by(name: "Dancing Disco").id,
    description: 'This is a special piece of land that is being lovingly restored.... both back to nature and to showcase the history of the land. There is lots to explore and great trails to hike. Myrna is a very welcoming and lovely host.... be sure to hang out by the camp fire at night to get to meet her!',
    author_id: User.find_by(first_name: "Kevin").id
  )

  Review.create!(
    listing_id: Listing.find_by(name: "Dancing Disco").id,
    description: ' went above and beyond to accommodate our group, and provided helpful amenities like water, firewood, and even chocolate! The site itself is incredible, with ocean views and (and sounds!). The tipi was a savior during the cold and windy night, and there was plenty of space to pitch our two additional tents.',
    author_id: User.find_by(first_name: "Sheryl").id
  )

  Review.create!(
    listing_id: Listing.find_by(name: "Evergreen").id,
    description: 'So glad I stumbled across this gem!',
    author_id: User.find_by(first_name: "Nathan").id
  )

  Review.create!(
    listing_id: Listing.find_by(name: "Evergreen").id,
    description: 'honestly the most beautiful campsite I have ever been to!! There was some rain the day we were set to camp and we almost cancelled our plans, but are SO glad we did not. The property is beautiful by nature and absolutely beautifully kept -- no trash, well kept pavillions and probably the cleanest outhouse you will ever find. The sites look down over the valley and mountains, giving an incredible sunset experience. ',
    author_id: User.find_by(first_name: "Amy").id
  )

  Review.create!(
    listing_id: Listing.find_by(name: "Firnwood Cedar").id,
    description: 'This is a special piece of land that is being lovingly restored.... both back to nature and to showcase the history of the land. There is lots to explore and great trails to hike. Myrna is a very welcoming and lovely host.... be sure to hang out by the camp fire at night to get to meet her!',
    author_id: User.find_by(first_name: "Kevin").id
  )

  Review.create!(
    listing_id: Listing.find_by(name: "Firnwood Cedar").id,
    description: ' went above and beyond to accommodate our group, and provided helpful amenities like water, firewood, and even chocolate! The site itself is incredible, with ocean views and (and sounds!). The tipi was a savior during the cold and windy night, and there was plenty of space to pitch our two additional tents.',
    author_id: User.find_by(first_name: "Beyonce").id
  )



end
