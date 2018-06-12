class FixReviewsAuthorColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :author
    add_column :reviews, :author_id, :integer
  end
end
