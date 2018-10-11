# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Kid.delete_all
Parent.delete_all


joan = Parent.create(
    name:'Joan Smith',
    age: 40,
    birthday: Date.parse('15 Jan  1975')
)
mika=joan.kids.create(
    name:'mika Smith',
    age: 5
)
tommy=joan.kids.create(
    name:'tommy Smith',
    age: 4
)
hulo=joan.kids.create(
    name:'hulo Smith',
    age: 2
)

olee = Parent.create(
    name:'Ok-Hyun Lee',
    age: 30,
    birthday: Date.parse('08 Oct  1977')
)

jenny=olee.kids.create(
    name:'jenny Lee',
    age: 6
)

Tani=olee.kids.create(
    name:'Tani Lee',
    age: 2
)