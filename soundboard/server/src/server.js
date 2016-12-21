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


module.exports = Server;
