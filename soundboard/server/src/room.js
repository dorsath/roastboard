var uuid = require('node-uuid');

function Room(client){
  this.clients = [];
  this.uuid = uuid.v4();
  this.addClient(client);
}

Room.prototype = {
  play: function(sound, sourceClient){
    this.clients.forEach(function(client){
      client.send(this.playSoundCommand(sound));
    }.bind(this));
  },
  playSoundCommand: function(sound){
    return JSON.stringify({"command": "play", "sound": sound});
  },
  addClient: function(client){
    console.log("adding client: ", client);
    this.clients.push(client);
    client.currentRoom = this;
  },
  removeClient: function(client){
    this.clients = this.clients.filter(function(c) { return c == client });
    client.currentRoom = undefined;
  }


};


module.exports = Room;
