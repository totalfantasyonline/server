var totalFantasyOnline = totalFantasyOnline || {};

totalFantasyOnline.socket = io.connect();

totalFantasyOnline.game = new Phaser.Game(800, 600, Phaser.CANVAS, '');

totalFantasyOnline.game.state.add('Boot', totalFantasyOnline.Boot);
//uncomment these as we create them through the tutorial
totalFantasyOnline.game.state.add('Preload', totalFantasyOnline.Preload);
totalFantasyOnline.game.state.add('MainMenu', totalFantasyOnline.MainMenu);
totalFantasyOnline.game.state.add('Game', totalFantasyOnline.Game);

totalFantasyOnline.game.state.start('Boot');
