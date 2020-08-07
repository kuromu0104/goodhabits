require 'rails_helper'

RSpec.describe Post, type: :model do
  context 'Associations' do
    it 'belogns_to user' do
      association = described_class.reflect_on_association(:user).macro
      exoect(association).to eq :belongs_to
    end

    it 'belongs_to category' do
      association = described_class.reflect_on_association(:category).macro
      expect(association).to eq :belongs_to
    end
  end
end
