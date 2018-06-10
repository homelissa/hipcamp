# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_06_10_020336) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookings", force: :cascade do |t|
    t.integer "guest_id", null: false
    t.integer "listing_id", null: false
    t.datetime "check_in", null: false
    t.datetime "check_out", null: false
    t.integer "num_guest", null: false
    t.float "total_price", null: false
    t.string "status"
    t.index ["guest_id"], name: "index_bookings_on_guest_id"
    t.index ["listing_id"], name: "index_bookings_on_listing_id"
  end

  create_table "listing_photos", force: :cascade do |t|
    t.integer "listing_id", null: false
    t.string "image_url", null: false
    t.integer "order", null: false
    t.index ["listing_id"], name: "index_listing_photos_on_listing_id"
  end

  create_table "listings", force: :cascade do |t|
    t.integer "host_id", null: false
    t.string "name", null: false
    t.text "description", null: false
    t.string "address", null: false
    t.integer "daily_cost", null: false
    t.integer "max_guest", null: false
    t.float "lat", null: false
    t.float "lng", null: false
    t.boolean "is_camping", null: false
    t.boolean "allow_pets", null: false
    t.boolean "is_wifi", null: false
    t.boolean "is_toilets", null: false
    t.boolean "is_showers", null: false
    t.boolean "is_biking", null: false
    t.boolean "is_fishing", null: false
    t.boolean "is_paddling", null: false
    t.boolean "is_horseback_riding", null: false
    t.boolean "is_surfing", null: false
    t.boolean "is_climbing", null: false
    t.float "elevation"
    t.string "check_in_after", null: false
    t.string "check_out_before", null: false
    t.string "icon_url", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email_address", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email_address"], name: "index_users_on_email_address", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
