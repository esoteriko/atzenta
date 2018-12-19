class CreateMeetings < ActiveRecord::Migration[5.2]
  def change
    create_table :meetings do |t|
      t.string :title
      t.string :body
      t.date :schedule_date
      t.string :purpose
      t.integer :duration
      t.time :start_time
      t.references :follow_up, foreign_key: true

      t.timestamps
    end
  end
end
