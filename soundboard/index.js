let sounds = require("./src/sounds.js");
let Server = require('./src/server.js');

Server.setup();

document.getElementById("joinRoomButton").addEventListener("click", Server.joinRoom.bind(Server));
Server.roomIdField = document.getElementById("roomIdField");
Server.roomCounter = document.getElementById("roomOccupants");

window.addEventListener("hashchange", Server.updateFromHash.bind(Server));

let container = document.getElementById("soundbuttons");


let play = function(file){
  if (Server.connected && Server.roomId)
    Server.play(file);
  Server.playSound(file);
}

let timeouts = {};

Server.playSound = function(file){
  let a = new Audio('sounds/' + file);
  a.addEventListener('loadedmetadata', function() {
    a.currentTime = 0;
    a.playbackRate = 1;
    a.play(); 

    if (timeouts[file]) {
      clearTimeout(timeouts[file]);
    } else {
      let element = container.querySelector("[data-filename='" + file + "']");
      if (element){
        element.className += " active bump";
        setTimeout(function(){
          element.className = element.className.replace(/ bump/g, "");
        }, 200);
      }
    }

    timeouts[file] = setTimeout(function(){
      soundFinished(file);
    }, a.duration * 1000);

  });
  

}

let soundFinished = function(file){

  let element = container.querySelector("[data-filename='" + file + "']");
  if (element){
    element.className = element.className.replace(/ active/g,"");
  }
  delete timeouts[file];
}

let newButton = function(file, sound){
  let btnContainer = document.createElement("div");
  btnContainer.className = "soundRow";
  btnContainer.dataset.filename = file;
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


for (var key in sounds){
  container.appendChild(newButton(key, sounds[key]));
}

