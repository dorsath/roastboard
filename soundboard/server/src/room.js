var uuid = require('node-uuid');

var path = require('path');
var fs = require('fs');

var Sounds = require('../../src/sounds.js');

function Room(client, roomId){
  this.clients = [];
  this.uuid = roomId ? roomId : String(uuid.v4());
  this.addClient(client);
  this.player = require('play-sound')(opts = {})
  this.soundsFolder = path.resolve(appRoot, '..', 'public', 'sounds');
}

Room.prototype = {
  play: function(sound, sourceClient){
    console.log("playing ", sound, "in room", this.uuid);
    var soundFile = path.resolve(this.soundsFolder, sound);
    if (Sounds[sound] == undefined)
      return;
    // Play file on the server
    if (fs.statSync(soundFile) && this.player){
      this.player.play(soundFile, function(err){
        if (err)
          console.log('Couldn\'t play file "' + soundFile + '"');
      })
    }
    // Send command to clients to play sound
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
