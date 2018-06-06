class AddConstraintsToUsers < ActiveRecord::Migration[5.2]
  def change
    change_column_null :users, :email_address, false
    change_column_null :users, :password_digest, false
    change_column_null :users, :session_token, false
    change_column_null :users, :first_name, false
    change_column_null :users, :last_name, false
    add_index :users, :email_address, unique: true
    add_index :users, :session_token, unique: true
  end
end
