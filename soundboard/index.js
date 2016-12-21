let sounds = require("./src/sounds.js");
let Server = require('./src/server.js');
//let socket = new WebSocket("ws://localhost:5000");
//let clientId;
//let serverConnected = new Promise(function(resolve){
//  socket.onopen = function(event){
//    console.log("connected");
//    socket.send(JSON.stringify({"request": "newRoom"}));
//    resolve();
//  }
//  socket.onmessage = function(event){
//    console.log(JSON.parse(event.data));
//  }
//
//});

Server.setup();

document.getElementById("newRoomButton").addEventListener("click", Server.newRoom.bind(Server));
document.getElementById("joinRoomButton").addEventListener("click", Server.joinRoom.bind(Server));
Server.roomIdField = document.getElementById("roomIdField");


let play = function(file){
  if (Server.connected && Server.roomId)
    Server.play(file);
  else
    Server.playSound(file);
}

Server.playSound = function(file){
  let a = new Audio('sounds/' + file);
  a.currentTime = 0;
  a.playbackRate = 1;
  a.play();
}






let newButton = function(file, text){
  let btn = document.createElement("div");
  btn.appendChild(document.createTextNode(text));
  btn.className = "soundButton";
  btn.addEventListener("click", function(){
    play(file);
  });

  return btn;
}

let container = document.getElementById("soundbuttons");


for (var key in sounds){
  container.appendChild(newButton(key, sounds[key]));
}

