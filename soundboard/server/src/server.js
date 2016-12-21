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
  rooms: [],
  clients: [],
  newRoom: function(client){
    if (client.currentRoom)
      this.leaveRoom(client, client.currentRoom);

    var room = new Room(client);
    this.rooms.push(room);
    return room;
  },
  findRoom: function(roomId){
    for(var i in this.rooms){
      if (this.rooms[i].uuid == roomId)
        return this.rooms[i];
    }
  },
  joinRoom: function(client, roomId){
    var room = this.findRoom(roomId);
    if (client.currentRoom)
      this.leaveRoom(client, client.currentRoom);

    if (room)
      room.addClient(client);
    else
      this.newRoom(client, roomId);
  },
  leaveRoom: function(client, room){
    room.removeClient(client);

    if (room.clients.length == 0){
      this.removeRoom(room);
    }
  },
  removeRoom: function(room){
    var index = this.rooms.indexOf(room);
    if (index > -1) {
        this.rooms.splice(index, 1);
    }
  },
  newClient: function(connection){
    var newClient = new Client(connection);
    this.clients.push(newClient);
    return newClient;
  },
  removeClient: function(client){
    var index = this.clients.indexOf(client);
    if (index > -1) {
        this.clients.splice(index, 1);
    }
  },
  findClient: function(clientId){
    for(var i in this.clients){
      if (this.clients[i].uuid == clientId)
        return this.clients[i];
    }
  }
};


module.exports = Server;
