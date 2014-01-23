var QueueSelectionView = Backbone.View.extend({
	  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  template: "<select></select>",
  initialize: function() {
    this.render();
  },
  events: {
  	'change select': "changePlaylist"
  },
  render: function(){
  	this.$el.html(this.template);
  	for(var key in this.model){
  		console.log(key);
  		this.$el.find('select').append('<option value="' + key + '">' + key + '</option>');
  	}
  },
  changePlaylist: function(e){
    this.trigger('changePlaylist', this.$('select').val() );
    // this.model.set('', new SongQueue())
  }
})