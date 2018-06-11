class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :author, null: false
      t.integer :listing_id, null: false
      t.datetime :created_at, null: false
      t.text :description, null: false
    end

    add_index :reviews, :author
    add_index :reviews, :listing_id 
  end
end
