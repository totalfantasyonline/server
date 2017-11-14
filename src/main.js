module.exports = function(http,io) {

  // start node's http server
  http.listen(8888, () => {
     console.log('listening on localhost:8888');
  });

  //io.on('connection', (socket) => {
  //});

}
