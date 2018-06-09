class CreateListingPhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :listing_photos do |t|
      t.integer :listing_id, null: false
      t.string :image_url, null: false
      t.integer :order, null: false
    end

    add_index :listing_photos, :listing_id
  end
end
