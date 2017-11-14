var totalFantasyOnline = totalFantasyOnline || {};

totalFantasyOnline.Boot = function(){};

//setting game configuration and loading the assets for the loading screen
totalFantasyOnline.Boot.prototype = {
  preload: function() {
  	//assets we'll use in the loading screen
    //this.load.image('logo', 'assets/images/logo.png');
    this.load.image('preloadbar', 'assets/images/preloader-bar.png');
  },
  create: function() {
  	//loading screen will have a white background
    this.game.stage.backgroundColor = '#fff';


	//physics system for movement
	this.game.physics.startSystem(Phaser.Physics.P2JS);

    this.state.start('Preload');
  }
};
