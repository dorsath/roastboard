let uuid = require('node-uuid');
let Config = require('../config.js');

let Server = {
  socket: undefined,
  connected: false,
  roomId: undefined,
  setup: function(){
    this.socket = new WebSocket(Config.serverURL);
    this.socket.onopen = this.onopen.bind(this);
    this.socket.onmessage = this.onmessage.bind(this);
    this.socket.onclose = this.onclose.bind(this);
    this.socket.onerror = this.onerror.bind(this);
  },
  handleCommand: function(request, data){
    console.log(request,data);
    switch(request){
      case "roomId":
        this.setRoom(data.roomId);
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
    this.updateFromHash();
  },
  updateFromHash: function(event){
    var uuidFromUrl = window.location.href.split("#")[1];
    if (uuidFromUrl){
      console.log("joining room");
      this.roomId = uuidFromUrl;
      this.roomIdField.value = uuidFromUrl;
      this.joinRoom();
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
    this.tryToReconnect();
  },
  newRoom: function(){
    if (this.connected){
      let message = {"request": "newRoom"};
      this.socket.send(JSON.stringify(message));
    }
  },
  setRoom: function(roomId){
    this.roomIdField.value = roomId;
    this.roomId = roomId;
    window.history.pushState('room', 'Join room', '/#' + roomId);
  },
  joinRoom: function(){
    if (this.connected){
      if (this.roomIdField.value != "") {
        let message = {"request": "joinRoom", "roomId": this.roomIdField.value};
        this.socket.send(JSON.stringify(message));
        this.setRoom(this.roomIdField.value);
      } else
        this.newRoom();
    }
  },
  play: function(file){
    if (this.connected){
      let message = {"request": "play", "sound": file};
      this.socket.send(JSON.stringify(message));
    }
  }
}



module.exports = Server;
