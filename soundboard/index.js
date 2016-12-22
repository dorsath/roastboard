let sounds = require("./src/sounds.js");
let Server = require('./src/server.js');

Server.setup();

document.getElementById("joinRoomButton").addEventListener("click", Server.joinRoom.bind(Server));
Server.roomIdField = document.getElementById("roomIdField");

window.addEventListener("hashchange", Server.updateFromHash.bind(Server));


let play = function(file){
  if (Server.connected && Server.roomId)
    Server.play(file);
  Server.playSound(file);
}

Server.playSound = function(file){
  let a = new Audio('sounds/' + file);
  a.currentTime = 0;
  a.playbackRate = 1;
  a.play();
}






let newButton = function(file, sound){
  let btnContainer = document.createElement("div");
  btnContainer.className = "soundRow";
  let btn = document.createElement("div");
  btn.appendChild(document.createTextNode(sound.text));
  btn.className = "soundButton";
  btn.addEventListener("click", function(){
    play(file);
  });
  btnContainer.appendChild(btn);

  let sourceLink = document.createElement("a");
  sourceLink.appendChild(document.createTextNode("youtube"));
  sourceLink.href = sound.source;
  sourceLink.target = "_blank";
  sourceLink.className = "soundSource";
  btnContainer.appendChild(sourceLink);

  return btnContainer;
}

let container = document.getElementById("soundbuttons");


for (var key in sounds){
  container.appendChild(newButton(key, sounds[key]));
}

