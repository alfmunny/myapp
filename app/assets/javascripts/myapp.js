//= require ./store
//= require_tree ./mixins
//= require_tree ./models
//= require_tree ./controllers
//= require_tree ./views
//= require_tree ./helpers
//= require_tree ./components
//= require_tree ./templates
//= require ./router
//= require_tree ./routes
//= require_self
//

Myapp.ApplicationAdapter = DS.ActiveModelAdapter;

Myapp.Post = DS.Model.extend({
	title: DS.attr('string'),
	author: DS.attr('string'),
	intro: DS.attr('string'),
	extended: DS.attr('string'),
	published_at: DS.attr('date')
});

Myapp.PostsRoute = Ember.Route.extend({
	model: function() {
						return this.store.find('post');
				 }
});

Myapp.PostsController = Ember.ObjectController.extend({
	sortProperties: [":id"],
	sortAscending: false
})

Myapp.PostRoute = Ember.Route.extend({
	model: 	function(params) {
						return this.store.find('post', params.post_id);
					}
});

Myapp.NewRoute = Ember.Route.extend({
		model: function() {
					 return this.store.createRecord('post', {
						 author: 'Yuanchen',
						 published_at: new Date()
					 });
					 }
});

Myapp.NewController = Ember.ObjectController.extend({
	create: function() {
		this.get('model').save();
		this.transitionToRoute('posts');
	},
	cancel: function() {
		this.get('model').deleteRecord();
		this.transitionToRoute('posts');
	}
});

Myapp.PostController = Ember.ObjectController.extend({
	isEditing: false,
	edit: function() {
		this.set('isEditing', true);
	},
	cancel: function() {
		this.set('isEditing', false);
	},
	doneEditing: function() {
		this.set('isEditing', false);
		this.get('model').save();
	},
	destroy: function() {
		if(window.confirm("Are you sure to delete this post?")){
			this.get('model').deleteRecord();
			this.get('model').save();
			this.transitionToRoute('posts');
		}
	}
});

Myapp.Post.FIXTURES = [];

var showdown = new Showdown.converter();


Ember.Handlebars.helper('date', function(input) {
	return moment(input).format('MMMM Do YYYY, hh:mm:ss');
});

Ember.Handlebars.helper('markdown', function(input) {
	if(input) {
		return new Handlebars.SafeString(showdown.makeHtml(input));
	}
});

