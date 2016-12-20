var WebSocketServer = require('ws').Server;
var uuid = require('node-uuid');
var Room = require('./src/room.js');
var RequestHandler = require('./src/request_handler.js');

function Client() {
}

Client.prototype = {
  send: function(msg){
    console.log("test message", msg);
  }
};

var client_1 = new Client();
var client_2 = new Client();

var Server = {
  rooms: [],
  newRoom: function(client){
    this.rooms.push(new Room(client));
  },
  joinRoom: function(client, roomId){
    var room = this.rooms.find(function(r) { return r.uuid == roomId });
    if (room)
      room.addClient(client);
  }
};

var message = {"request": "newRoom"};
RequestHandler.handle(Server, client_1, message);

var message = {"request": "joinRoom", "roomId": client_1.currentRoom.uuid};
RequestHandler.handle(Server, client_2, message);

message = {"request": "play", "sound": "test.mp3"};
RequestHandler.handle(Server, client_1, message);

    //var message = JSON.parse(json);

RequestHandler.handle(Server, client_1, {"request": "disconnect"});



//var wss = new WebSocketServer({ port: 5000 });

//wss.on('connection', function connection(ws) {
//  ws.on('message', function incoming(message) {
//    console.log(message);
//  });
//  ws.on('open', function(){
//    ws.send(JSON.stringify(repo.toJS()));
//  });
//  ws.on('close', function(){
//    console.log('lost connection');
//  });
//});
//
//console.log("js");
