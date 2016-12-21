# Team JLEI - Discord Purge Roast Bot

This is a bot for Discord based on the [Airhorn Bot](https://github.com/hammerandchisel/airhornbot/).

The bot allows you to play sound fragments from Purge's coaching videos in your Discord voice channel by writing `!purge` in a chat channel

# Installation

* Install Go Lang for your platform. See https://golang.org/doc/install#install
* Set up your $GOPATH System Variable as described at https://golang.org/doc/install#testing
* Fire up a console or command prompt and download the Discord RoastBot: `go get github.com/dorsath/roastboard/discord/cmd/bot`
* Install (compile) the RoastBot: `go install github.com/dorsath/roastboard/discord/cmd/bot`
* Go to your $GOPATH\bin folder and copy the audio folder to the current folder: `cp -r ../src/github.com/dorsath/roastboard/discord/cmd/bot/audio/ .`
* Create a Discord bot and add it to your Server using the Discord Developers API as described at https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token. Save your Bot token for the next step!
* Fire up the Discord bot from the $GOPATH\bin folder. For windows: ./bot.exe -t **bot-token**. For Linux/OSX: ./bot -t **bot-token**

# Supported Commands


