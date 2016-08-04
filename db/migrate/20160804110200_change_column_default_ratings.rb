class ChangeColumnDefaultRatings < ActiveRecord::Migration[5.0]
  def change
    change_column :ratings, :like, :integer, :default => 0
    change_column :ratings, :unlike, :integer, :default => 0
  end
end
