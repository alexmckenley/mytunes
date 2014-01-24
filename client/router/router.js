var Router = Backbone.Router.extend({
	routes: {
		"" : 'home',
		"*t" : "createPlaylist" 
	},
    home: function(){ 
	    var library = new Songs(songData);
	    var app = new AppModel({library: library});
	    var appView = new AppView({model: app});
	    $('body').append(appView.render());
    },
    createPlaylist: function(name) {
    	$('body').html('')
	    var library = new Songs(songData);
	    var app = new AppModel({library: library});
	    var appView = new AppView({model: app});
	    $('body').append(appView.render());

	    app.addPlaylist(name);
	    app.changeCurrentPlaylist(name);
        console.log(appView);
        appView.songQueueView.setCollection(app.get('currentPlaylist'));

    }
});