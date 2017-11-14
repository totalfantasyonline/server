var totalFantasyOnline = totalFantasyOnline || {};

//loading the game assets
totalFantasyOnline.Game = function(){};

totalFantasyOnline.Game.prototype = {
  preload: function() {
    var map = this.add.tilemap('forrest');
    map.addTilesetImage('forrest', 'forrest ground');
    map.addTilesetImage('collision', 'collision');
    var layer;
    for(var i = 0; i < map.layers.length-1; i++) {
      layer = map.createLayer(i);
    }
    layer.inputEnabled = true;

  },
  create: function() {
  }
};
