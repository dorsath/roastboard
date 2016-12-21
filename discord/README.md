# Team JLEI - Discord Purge Roast Bot

This is a bot for Discord based on the [Airhorn Bot](https://github.com/hammerandchisel/airhornbot/).

The bot allows you to play sound fragments from Purge's coaching videos in your Discord voice channel by writing `!purge` in a chat channel

# Installation

1. Install Go Lang for your platform. See https://golang.org/doc/install#install
2. Set up your $GOPATH System Variable as described at https://golang.org/doc/install#testing
3. Fire up a console or command prompt and download the Discord RoastBot: `go get github.com/dorsath/roastboard/discord/cmd/bot`
4. Install (compile) the RoastBot: `go install github.com/dorsath/roastboard/discord/cmd/bot`
5. Go to your $GOPATH\bin folder and copy the audio folder to the current folder: `cp -r ../src/github.com/dorsath/roastboard/discord/cmd/bot/audio/ .` (sorry not arsed to figure out how to automate this..)
6. Create a Discord bot and add it to your Server using the Discord Developers API as described at https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token. Save your Bot token for the next step!
7. Navigate to your $GOPATH\bin folder and fire up the bot!
  * For windows: ./bot.exe -t **bot-token**. 
  * For Linux/OSX: ./bot -t **bot-token**
8. The Bot should now have joined your Server, ready to roast!

# Supported Commands

| Command       | Description           |
| :------------ |:----------------------|
| !purge        | Plays a random Purge roast from all the following roasts. |
| !purge sunder | You actually just sunder killed yourself. I am actually really impressed. I am pretty blown away actually. |
| !purge officially_huge_mistake | You have officially made a huge mistake, okay.. |
| !purge dont_understand | It's probably because you're low MMR, you don't understand. |
| !purge weak_players | You guys are at 1k MMR because you are weak players, not because your allies are bad. |
| !purge worthless | The way that you're spending your time right now is just so worthless. |
| !purge not_about_you | This game is not about you. |
| !purge big_mistake | That was a pretty big mistake. |
| !purge teammates_1kmmr | Its not your teammates keeping you at 1K MMR. It's your shit farming patterns. Its your inefficient movement. Its your bad stacking. Its all of these things. You're not using your mana correctly. Your skillbuilds are aweful. |
| !purge shit_playstyle | You put a whole lotta words to that shit playstyle you developed. |
| !purge right_click | You can just right click, right click, right click... 6 last hits that you could've gotten right there. You can't do that shit man CMON! |
| !purge problem_1kmmr | This is the problem with 1K MMR Players. They basically just show up and they stand around and eventually somebody dies. |
| !purge not_dota_long | You're basically not even playing Dota (long version). |
| !purge not_dota | You're basically not even playing Dota. |
| !purge oh_no_mistake | OOOH NOOOOO OHHHH NOOOOO MISTAAAKKEEEE |
| !purge not_worth | I don't think its worth watching the rest of this game honestly, because it's just mistake after mistake now. |
| !purge lol | It's like you're playing League of Legends now honestly. |
| !purge infinitely_better | That would've been infinitely better than how you have played this game. |
| !purge skewer | I'm gonna skewer you: you had a really shit early game! |
| !purge no_idea | Honestly I have no fucking idea how you're 4.7k MMR. |
| !purge huge_mistake | You have officially made a huge mistake, okay... |
| !purge hasnt_done_shit | What has he done in the meantime? He hasn't done shit, he's being buying in the store, he has full mana, hasn't been farming, could've farmed this, could've farmed this. So many things he could've done. |
| !purge fuck_slacks | Fuck slacks. |
| !purge coffin | 1 min coffin tirade |
| !purge support | That's not playing support man. You're just playing a hero that chooses not to farm. That's it. That's all you're doing in this game. |
| !purge wrong_guy | And then you start attacking the wrong guy as well. You super messed up. |
| !purge messed_up | Alright, you super messed up there. |
