(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
let sounds = require("./src/sounds.js");
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
  //console.log(key);
}

},{"./src/sounds.js":2}],2:[function(require,module,exports){
module.exports = {
  "time_spent_worthless.mp3": "The way that you're spending your time right now is just so worthless",
  "i_have_no_idea.mp3": "Honestly I have no fucking idea how you're 4.7k MMR",
  "shit_playstyle.mp3": "You put a whole lotta words to that shit playstyle you developed",
  "its_not_worth_watching.mp3": "I don't think its worth watching the rest of this game honestly, because it's just mistake after mistake now",
  "you_have_officially_made_a_huge_mistake.mp3": "You have officially made a huge mistake, okay..",
  "huge_mistake.mp3": "HUUUUGEEE Mistake",
  "he_hasnt_done_shit.mp3": "What has he done in the meantime? He hasn't done shit, he's being buying in the store, he has full mana, hasn't been farming, could've farmed this, could've farmed this. So many things he could've done.",
  "this_game_is_not_about_you.mp3": "This game is not about you",
  "you_dont_understand.mp3": "It's probably because you're low MMR, you don't understand...",
  "weak_players.mp3": "You guys are at 1k MMR because you are weak players, not because your allies are bad.",
  "choosing_not_to_farm.mp3": "That's not playing support man. You're just playing a hero that chooses not to farm. That's it. That's all you're doing in this game.",
  "alright_you_messed_up.mp3": "Alright, you super messed up there.",
  "its_like_league_of_legends.mp3": "It's like you're playing League of Legends now honestly..",
  "infinitely_better.mp3": "That would've been infinitely better than how you have played this game.",
  "you_sunder_killed_yourself.mp3": "You actually just sunder killed yourself. I am actually really impressed. I am pretty blown away actually.",
  "attacking_the_wrong_guy.mp3": "And then you start attacking the wrong guy as well. You super messed up. (gniffelend in minachting)",
  "right_click.mp3": "You can just right click, right click, right click... 6 last hits that you could've gotten right there. You can't do that shit man CMON",
  "not_playing_dota_long.mp3": "You're basically just going to your lane slowly collecting farm and hoping that your opponents do it slower than you. You're not exerting lane pressure. You're basically not even playing Dota.",
  "teammates_at_1kmmr.mp3": "Its not your teammates keeping you at 1K MMR. It's your shit farming patterns. Its your inefficient movement. Its your bad stacking. Its all of these things. You're not using your mana correctly. Your skillbuilds are aweful.",
  "problem_with_1kmmr_players.mp3": "This is the problem with 1K MMR Players. They basically just show up and they stand around and eventually somebody dies.",
  "oh_no_mistake.mp3": "OOOH NOOOOO OHHHH NOOOOO MISTAAAKKEEEE",
  "im_gonna_screw_you.mp3": "I'm gonna screw you: you had a really shit early game!",
  "coffin_tirade.mp3": "Tirade over Coffin",
  "fuck_slacks.mp3": "Fuck slacks",
  "not_playing_dota.mp3": "You're basically not even playing Dota.",
  "that_was_a_pretty_big_mistake.mp3": "That was a pretty big mistake"
}

},{}]},{},[1]);
