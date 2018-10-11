class CreateParents < ActiveRecord::Migration[5.1]
  def change
    create_table :parents do |t|
      t.string :name
      t.integer :age
      t.date :birthday

      t.timestamps
    end
  end
end
