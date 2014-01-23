var NewPlaylistView = Backbone.View.extend({
	  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  template: "<form><input type='text' id='playlistName' placeholder='Playlist Name...' /><input type='submit'/></form>",
  initialize: function() {
    this.render();
  },
  events: {
  	'submit form': 'addPlaylist'
  },
  render: function(){
    return this.$el.html(this.template);
  },
  addPlaylist: function(e){
    e.preventDefault();
    this.trigger('addPlaylist', this.$('#playlistName').val() );
  }
});