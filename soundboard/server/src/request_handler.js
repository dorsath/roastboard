var RequestHandler = {
  handle: function(server, client, message){
    console.log(message);
    if (!message.request)
      return;

    switch(message.request){
      case "newRoom":
        server.newRoom(client);
        break;
      case "joinRoom":
        if (message.roomId)
          server.joinRoom(client, message.roomId);
        break;
      case "play":
        if (message.sound)
          client.currentRoom.play(message.sound, client);
        break;
      case "disconnect":
        if (client.currentRoom)
          client.currentRoom.removeClient(client);
        break;
    }
  }

};

module.exports = RequestHandler;
