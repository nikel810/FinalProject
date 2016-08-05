class CreateArticles < ActiveRecord::Migration[5.0]
  def change
    create_table :articles do |t|
      t.belongs_to :user, index: true
      t.string :url
      t.string :title
      t.text :description
      t.string :img
      t.string :favicon

      t.timestamps
    end
  end
end
