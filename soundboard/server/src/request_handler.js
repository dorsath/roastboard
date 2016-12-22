var Server = require('./server.js');
var uuid = require('node-uuid');

var RequestHandler = {
  handle: function(server, connection, message){
    if (!message.request)
      return;

    var client;
    for (var clientId in Server.clients){
      if (Server.clients[clientId].connection === connection){
        client = Server.clients[clientId];
        break;
      }
    };

    switch(message.request){
      case "newClient":
        var client = Server.newClient(connection);
        break;
      case "newRoom":
        if (client){
          var room = Server.newRoom(client);
          connection.send(JSON.stringify({"command": "roomId", "roomId": room.uuid}));
        }
        break;
      case "joinRoom":
        if (message.roomId != undefined){
          Server.joinRoom(client, message.roomId);
        }
        break;
      case "roomOccupants":
        if (client && client.currentRoom){
          connection.send(JSON.stringify({"command": "roomOccupants", "roomOccupants": client.currentRoom.clients.length})); 
        }
        break;
      case "play":
        if (client && client.currentRoom && message.sound)
          client.currentRoom.play(message.sound, client);
        break;
      case "disconnect":
        if (client){
          console.log("disconnected");
          Server.removeClient(client);
        }
        break;
    }
  }

};

module.exports = RequestHandler;
