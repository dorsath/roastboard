var Server = require('./server.js');
var uuid = require('node-uuid');

var RequestHandler = {
  handle: function(server, connection, message){
    console.log(message);
    if (!message.request)
      return;

    var client = Server.findClient(message.clientId);
    if (client)
      console.log("client", client.uuid);

    switch(message.request){
      case "newClient":
        var client = Server.newClient(connection);
        connection.send(JSON.stringify({"command": "clientId", "clientId": client.uuid}));
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
      case "play":
        if (client && client.currentRoom && message.sound)
          client.currentRoom.play(message.sound, connection);
        break;
      case "disconnect":
        if (client && client.currentRoom)
          client.currentRoom.removeClient(client);
        break;
    }
  }

};

module.exports = RequestHandler;
