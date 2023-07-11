# ModTrack

## Overview

*Public Archive for ModTrack: Powerful moderation and trend analytics for your Discord community.*

## Command List

### Debug Commands

* `/botinfo` — Displays bot's current server count.
* `/ping` — Checks current bot latency.
* `/invitelink` — Provides invite link for ModTrack.
* `/serversettings` — Displays current server config.

### Fun Commands

* `/dogfact` — Sends a random dog fact.
* `/catfact` — Sends a random cat fact.
* `/define` — Looks up a dictionary term.
* `/weather` — Provides weather info for a location.

### Info Commands

* `/avatar` — Shows a user's avatar.
* `/serverinfo` — Displays current server information.
* `/userinfo` — Shows profile info of a user.
* `/help` — Lists available commands.

### Staff Commands

* `/addnote` — Adds an admin note to a user.
* `/ban`, `/unban` — Bans or unbans a user.
* `/kick` — Kicks a member from the server.
* `/mute`, `/unmute` — Mutes or unmutes a member.
* `/record` — Shows all moderation records for a user.
* `/warn` — Issues a warning to a member.
* `/clear` — Bulk deletes messages.
* `/report` — Sends a report to moderation logs.
* `/setlogschannel` — Sets channel for moderation logs.
* `/viewnotes` — Views all staff notes for a member.

### Role Commands

* `/rolepicker` — Creates a self-assign role picker.
* `/giverole`, `/takerole` — Assigns/removes roles.

### Welcome Commands

* `/setwelcomechannel` — Sets welcome message channel.
* `/welcomemessage` — Customizes welcome message.
* `/welcomedm` — Sends welcome DMs to new users.
* `/welcomerole` — Auto-assigns roles to new members.

### Analytics Commands

* `/modstats` — Displays aggregate moderation actions (e.g., bans, mutes, warnings).
* `/trendlog` — Graphs recent infractions over time to show behavior trends.
* `/userheatmap` — Shows active hours for users receiving the most moderation.
* `/topviolators` — Lists users with the highest number of infractions.
* `/infractionrate` — Displays average infractions per day/week.
* `/serverhealth` — Summarizes moderation activity trends and server behavior metrics.


## Official Invite Link

[Click here to invite ModTrack to your server](<expired>)

## Installation Guide

### 1. Creating a Bot Account

Create a new app at [Discord Developer Portal](https://discord.com/developers/applications), enable bot permissions, and generate an invite link using your bot's client ID.

### 2. Setting Up the Environment

* Install [Node.js](https://nodejs.org/en/).
* Download and extract the source code.
* Open terminal in the project folder and run:

```bash
npm i
```

* Add your bot token to a `.env` file:

```env
TOKEN=your_bot_token
```

### 3. Configuring the Bot

* Edit `.env` to include log channels, suggestion channels, MongoDB URIs, and OpenWeatherMap API keys.
* Customize invite and support links as needed.

### 4. Setting up MongoDB

* Register at [MongoDB Atlas](https://www.mongodb.com/), create a cluster, and define 20+ databases matching `.env` fields (e.g., `bannedUsers`, `notes`, `mutedMembers`).
* Copy each connection URI to the respective field in `.env`.

### 5. Generating API Keys

* For weather commands, sign up at [OpenWeatherMap](https://openweathermap.org/api) and place the key in `.env`.

### 6. Running ModTrack

Start the bot using:

```bash
node .
```

Use this command anytime you update the source.

---

