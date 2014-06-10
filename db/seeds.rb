# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Post.create([{
	title: 'First Post',
	author: 'Yuanchen',
	published_at: '12-2-2014',
	intro: 'this is an introduction',
	extended: 'This is my first post.'
}])
