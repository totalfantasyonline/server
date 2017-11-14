// Third party modules
const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const hbs = require('express-handlebars');

// Local modules
const db = require('./src/db');
const main = require('./src/main')(http,io);
const routes = require('./src/routes')(app);
const localplayer = require('./src/localplayer')(io);


app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'default', layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));
