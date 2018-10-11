class Parent < ApplicationRecord
    has_many :kids,  dependent: :delete_all
end
