class CreateFollowUps < ActiveRecord::Migration[5.2]
  def change
    create_table :follow_ups do |t|
      t.string :body
      t.date :date

      t.timestamps
    end
  end
end
