json.extract! meeting, :id, :title, :body, :schedule_date, :purpose, :created_at, :updated_at
json.url meeting_url(meeting, format: :json)
