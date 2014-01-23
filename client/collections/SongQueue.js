// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
  	this.on('add', this.playFirst, this);
  	this.on('remove', this.playInLine, this);
    this.on('dequeue', this.removefromqueue, this)
  },

  playInLine: function () {
  	if(this.models.length > 0){
      this.models[0].play();
    }
  },
  playFirst: function (song) {
  	// console.log(this.models);
  	if(this.models.length === 1){
  		song.play();
  	}
  },
  deQueue: function(){
  	this.shift();
  	this.playInLine();
  },
  removefromqueue: function(song){
  	this.remove(song);
  }

});