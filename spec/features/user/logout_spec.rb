require "rails_helper"

RSpec.feature "Logout", :type => :feature do
  let(:user) { create(:user) }

  scenario 'ユーザーがログアウトに成功する', js: true do
    sign_in user
    visit root_path
    find('nav #user-settings').click
    find('nav a', text: 'ログアウト').click
    expect(page).to have_selector('nav a', text: 'ログイン')
    expect(page).to have_selector('nav a', text: '新規登録')
  end

end