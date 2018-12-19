require "application_system_test_case"

class MeetingsTest < ApplicationSystemTestCase
  setup do
    @meeting = meetings(:one)
  end

  test "visiting the index" do
    visit meetings_url
    assert_selector "h1", text: "Meetings"
  end

  test "creating a Meeting" do
    visit meetings_url
    click_on "New Meeting"

    fill_in "Body", with: @meeting.body
    fill_in "Duration", with: @meeting.duration
    fill_in "Purpose", with: @meeting.purpose
    fill_in "Schedule Date", with: @meeting.schedule_date
    fill_in "Start Time", with: @meeting.start_time
    fill_in "Title", with: @meeting.title
    click_on "Create Meeting"

    assert_text "Meeting was successfully created"
    click_on "Back"
  end

  test "updating a Meeting" do
    visit meetings_url
    click_on "Edit", match: :first

    fill_in "Body", with: @meeting.body
    fill_in "Duration", with: @meeting.duration
    fill_in "Purpose", with: @meeting.purpose
    fill_in "Schedule Date", with: @meeting.schedule_date
    fill_in "Start Time", with: @meeting.start_time
    fill_in "Title", with: @meeting.title
    click_on "Update Meeting"

    assert_text "Meeting was successfully updated"
    click_on "Back"
  end

  test "destroying a Meeting" do
    visit meetings_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Meeting was successfully destroyed"
  end
end