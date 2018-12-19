class CreateMeetings < ActiveRecord::Migration[5.2]
  def change
    create_table :meetings do |t|
      t.string :title
      t.string :body
      t.date :schedule_date
      t.string :purpose
      t.integer :duration
      t.time :start_time

      t.timestamps
    end
  end
end
