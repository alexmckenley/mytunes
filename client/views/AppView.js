// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('currentPlaylist')});
    this.newPlaylistView = new NewPlaylistView(/*{model: this.model}*/);
    this.queueSelectionView = new QueueSelectionView({model: this.model.get('playlists')});

    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    // this.queueSelectionView.on('changePlaylist', function(e){
    //   this.songQueueView.setCollection(this.model.get('playlists')[e])
    // }, this);

    this.queueSelectionView.on('changePlaylist', function(playlistName){
      this.model.changeCurrentPlaylist(playlistName);
      this.songQueueView.setCollection(this.model.get('currentPlaylist'));
    }, this);

    this.model.on("addedPlaylist", this.queueSelectionView.render, this.queueSelectionView);

    this.newPlaylistView.on("addPlaylist", this.model.addPlaylist, this.model);

  },


  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.newPlaylistView.$el,
      this.libraryView.$el,
      this.queueSelectionView.$el,
      this.songQueueView.$el
    ]);
  },

});
