class RemoveCreatedAt < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :created_at
    add_timestamps(:reviews)
  end
end
