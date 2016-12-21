let sounds = require("./src/sounds.js");
let socket = new WebSocket("ws://localhost:5000");
let serverConnected = new Promise(function(resolve){
  socket.onopen = function(event){
    console.log("connected");
  }
});



let play = function(file){
  socket.send(JSON.stringify({"request": "play", "sound": file}));
}

let playSound = function(file){
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

