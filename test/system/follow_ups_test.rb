require "application_system_test_case"

class FollowUpsTest < ApplicationSystemTestCase
  setup do
    @follow_up = follow_ups(:one)
  end

  test "visiting the index" do
    visit follow_ups_url
    assert_selector "h1", text: "Follow Ups"
  end

  test "creating a Follow up" do
    visit follow_ups_url
    click_on "New Follow Up"

    fill_in "Body", with: @follow_up.body
    fill_in "Date", with: @follow_up.date
    click_on "Create Follow up"

    assert_text "Follow up was successfully created"
    click_on "Back"
  end

  test "updating a Follow up" do
    visit follow_ups_url
    click_on "Edit", match: :first

    fill_in "Body", with: @follow_up.body
    fill_in "Date", with: @follow_up.date
    click_on "Update Follow up"

    assert_text "Follow up was successfully updated"
    click_on "Back"
  end

  test "destroying a Follow up" do
    visit follow_ups_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Follow up was successfully destroyed"
  end
end
