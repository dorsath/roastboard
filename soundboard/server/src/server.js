var uuid = require('node-uuid');
var Room = require('./room.js');

function Client(connection) {
  this.uuid = String(uuid.v4());
  this.connection = connection;
}

Client.prototype = {
  send: function(msg){
    this.connection.send(msg);
  }
};


var Server = {
  rooms: {},
  clients: {},
  newRoom: function(client, roomId){
    if (client.currentRoom)
      this.leaveRoom(client, client.currentRoom);

    var room = new Room(client, roomId);
    this.rooms[room.uuid] = room;
    return room;
  },
  joinRoom: function(client, roomId){
    var room = this.rooms[roomId];
    if (client.currentRoom)
      this.leaveRoom(client, client.currentRoom);

    if (room)
      room.addClient(client);
    else {
      this.newRoom(client, roomId);
    }
  },
  leaveRoom: function(client, room){
    room.removeClient(client);

    if (room.clients.length == 0){
      this.removeRoom(room);
    }
  },
  removeRoom: function(room){
    console.log("removing room: ", room.uuid);
    delete this.rooms[room.uuid];
  },
  newClient: function(connection){
    var newClient = new Client(connection);
    this.clients[newClient.uuid] = newClient;
    return newClient;
  },
  removeClient: function(client){
  
    if (client.currentRoom)
      this.leaveRoom(client, client.currentRoom);

    delete this.clients[client.uuid];
  },
  findClient: function(clientId){
    return this.clients[clientId];
  }
};


module.exports = Server;
