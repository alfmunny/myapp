// For more information see: http://emberjs.com/guides/routing/
Myapp.Router.map(function() {
   this.resource('posts', function() {
	 		this.resource('post', { path: ':post_id'});
	 });
	 this.resource('about');
	this.resource('new');
});
