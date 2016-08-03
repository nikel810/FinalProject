class CreateRatings < ActiveRecord::Migration[5.0]
  def change
    create_table :ratings do |t|
      t.references :user, foreign_key: true
      t.references :article, foreign_key: true
      t.integer :like
      t.integer :unlike

      t.timestamps
    end
  end
end
