class CreateArticles < ActiveRecord::Migration[5.0]
  def change
    create_table :articles do |t|
      t.belongs_to :user, index: true
      t.string :url
      t.text :description

      t.timestamps
    end
  end
end
