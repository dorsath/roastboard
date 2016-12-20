let sounds = require("./src/sounds.js");
var uuid = require('node-uuid');

let play = function(file){
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

console.log(window.location.href);
console.log(uuid.v4());
