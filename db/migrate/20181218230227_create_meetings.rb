class CreateMeetings < ActiveRecord::Migration[5.2]
  def change
    create_table :meetings do |t|
      t.string :title
      t.string :body
      t.datetime :schedule_date
      t.string :purpose

      t.timestamps
    end
  end
end
