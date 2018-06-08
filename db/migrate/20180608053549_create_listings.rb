class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.integer :host_id, null: false
      t.string :name, null: false
      t.text :description, null: false
      t.string :address, null: false
      t.integer :daily_cost, null: false
      t.integer :max_guest, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.boolean :is_camping, null: false
      t.boolean :allow_pets, null: false
      t.boolean :is_wifi, null: false
      t.boolean :is_toilets, null: false
      t.boolean :is_showers, null: false
      t.boolean :is_biking, null: false
      t.boolean :is_fishing, null: false
      t.boolean :is_paddling, null: false
      t.boolean :is_horseback_riding, null: false
      t.boolean :is_surfing, null: false
      t.boolean :is_climbing, null: false
      t.float :elevation
      t.string :check_in_after, null: false
      t.string :check_out_before, null: false
      t.string :icon_url, null: false 
    end
  end
end
