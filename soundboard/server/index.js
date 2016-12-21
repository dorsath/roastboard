var WebSocketServer = require('ws').Server;
var uuid = require('node-uuid');
var Room = require('./src/room.js');
var RequestHandler = require('./src/request_handler.js');
var Server = require('./src/server.js');

//function TestClient() {
//}
//
//TestClient.prototype = {
//  send: function(msg){
//    console.log("test message", msg);
//  }
//};
//




var wss = new WebSocketServer({ port: 5000 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log(ws);
    //console.log("message:", message);
    var json = JSON.parse(message);
    RequestHandler.handle(Server, ws, json);
  });
  ws.on('open', function(){
    RequestHandler.handle(Server, ws, {"request": "newRoom"});
  });
  ws.on('close', function(){
    RequestHandler.handle(Server, ws, {"request": "disconnect"});
    console.log('lost connection');
  });
});
