module.exports = function(app) {

  app.get('/', (req, res) => {
  	res.render('index', { title: 'Home!'} );
  });

  app.get('/play', (req, res) => {
	res.render('game', { title: 'Play!'} );
});

}
