class AddFaviconToArticles < ActiveRecord::Migration[5.0]
  def change
    add_column :articles, :favicon, :string
  end
end
