var uuid = require('node-uuid');
var Sounds = require('../../src/sounds.js');

function Room(client, roomId){
  this.clients = [];
  this.uuid = roomId ? roomId : String(uuid.v4());
  this.addClient(client);
}

Room.prototype = {
  play: function(sound, sourceClient){
    console.log("playing ", sound, "in room", this.uuid);
    if (Sounds[sound] == undefined)
      return;
    this.clients.forEach(function(client){
      if (client.uuid != sourceClient.uuid)
        client.send(this.playSoundCommand(sound));
    }.bind(this));
  },
  playSoundCommand: function(sound){
    return JSON.stringify({"command": "play", "sound": sound});
  },
  addClient: function(client){
    this.clients.push(client);
    client.currentRoom = this;
  },
  removeClient: function(client){
    this.clients = this.clients.filter(function(c) { return c != client });
    client.currentRoom = undefined;
  }

};


module.exports = Room;
