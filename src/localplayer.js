module.exports = function(io) {

  // socket functionality
  io.on('connection', function(socket) {
    socket.on('location', (data) => {
      location(data);
    });
    socket.on('moving', (data) => {
      move(data);
    });
    socket.on('sit', (data) => {
      sit(data);
    });
    socket.on('attack', (data) => {
      attack(data);
    });
    socket.on('test', (data) => {
      test(data);
    });
  });

  // localplayer functionality
  function location(data) {
    console.log('walking');
  }
  function move(data) {
    console.log('moving');
  }
  function sit(data) {
    console.log('sitting/standing');
  }
  function attack(data) {
    console.log('attacking');
  }
  function test(data) {
    console.log('test');
  }
}
