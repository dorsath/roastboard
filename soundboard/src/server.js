let uuid = require('node-uuid');

let Server = {
  socket: undefined,
  connected: false,
  clientId: undefined,
  roomId: undefined,
  setup: function(){
    this.socket = new WebSocket("ws://localhost:5000");
    this.socket.onopen = this.onopen.bind(this);
    this.socket.onmessage = this.onmessage.bind(this);
    this.socket.onclose = this.onclose.bind(this);
    this.socket.onerror = this.onerror.bind(this);
  },
  handleCommand: function(request, data){
    console.log(request,data);
    switch(request){
      case "clientId":
        this.clientId = data.clientId;
        this.updateFromHash();
        break;
      case "roomId":
        this.roomId = data.roomId;
        window.history.pushState('room', 'Join room', '/#' + this.roomId);
        this.roomIdField.value = this.roomId;
        break;
      case "play":
        this.playSound(data.sound);
        break;
    }

  },
  tryToReconnect: function(){
    setTimeout(this.setup.bind(this), 3000);
  },
  onopen: function(event){
    this.connected = true;
  },
  updateFromHash: function(event){
    var uuidFromUrl = window.location.href.split("#")[1];
    if (uuidFromUrl){
      console.log("joining room");
      this.roomId = uuidFromUrl;
      this.roomIdField.value = uuidFromUrl;
      this.joinRoom();
      //this.roomId = uuidFromUrl;
    }
  },
  onmessage: function(event){
    let data = JSON.parse(event.data);
    this.handleCommand(data.command, data);
  },
  onclose: function(event){
    this.closeConnection();
  },
  onerror: function(event){
    console.log("error", event);
  },
  closeConnection: function(event){
    console.log("closed");
    this.connected = false;
    this.socket = undefined;
    this.roomId = undefined;
    this.clientId = undefined;
    this.tryToReconnect();
  },
  newRoom: function(){
    if (this.connected){
      let message = {"request": "newRoom", "clientId": this.clientId};
      this.socket.send(JSON.stringify(message));
    }
  },
  joinRoom: function(){
    if (this.connected){
      let message = {"request": "joinRoom", "roomId": this.roomIdField.value, "clientId": this.clientId};
      this.socket.send(JSON.stringify(message));
    }
  },
  play: function(file){
    if (this.connected){
      let message = {"request": "play", "sound": file, "clientId": this.clientId};
      this.socket.send(JSON.stringify(message));
    }
  }
}



module.exports = Server;
