// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});
    this.newPlaylistView = new NewPlaylistView(/*{model: this.model}*/);


    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    this.songQueueView.on("rerender", function(){
      console.log(this.songQueueView.$el);
      $("#queue").remove();
      this.$el.append(this.songQueueView.$el);
    }, this)
  },


  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.newPlaylistView.$el,
      this.libraryView.$el,
      this.songQueueView.$el
    ]);
  },

});
