var WebSocketServer = require('ws').Server;
var uuid = require('node-uuid');
var Room = require('./src/room.js');
var RequestHandler = require('./src/request_handler.js');
var Server = require('./src/server.js');

console.log("Started websocket server at port 5000");


var wss = new WebSocketServer({ port: 5000 });

wss.on('connection', function connection(ws) {
  RequestHandler.handle(Server, ws, {"request": "newClient"});

  ws.on('message', function incoming(message) {
    //console.log("message:", message);
    var json = JSON.parse(message);
    RequestHandler.handle(Server, ws, json);
  });
  ws.on('close', function(){
    RequestHandler.handle(Server, ws, {"request": "disconnect"});
  });
});
