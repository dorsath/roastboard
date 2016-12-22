const express = require('express');
const SocketServer = require('ws').Server;
const PORT = process.env.PORT || 3000;

const path = require('path');
const INDEX = path.join(__dirname, '/public/');


var WebSocketServer = require('ws').Server;
var uuid = require('node-uuid');
var Room = require('./src/room.js');
var RequestHandler = require('./src/request_handler.js');
var Server = require('./src/server.js');

const server = express()
  .use(express.static('public'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));


const wss = new SocketServer({ server });
wss.on('connection', (ws) => {
  RequestHandler.handle(Server, ws, {"request": "newClient"});

  ws.on('message', function incoming(message) {
    var json = JSON.parse(message);
    RequestHandler.handle(Server, ws, json);
  });
  ws.on('close', function(){
    RequestHandler.handle(Server, ws, {"request": "disconnect"});
  });
});

