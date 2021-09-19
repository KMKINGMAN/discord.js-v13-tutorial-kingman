const { Intents, Client, Collection } = require("discord.js");
const envdot = require("dotenv");
envdot.config();
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS
    ]
})
const config = require("./localdb/config.json")
client.config = config;
client.commands = new Collection(),
client.events = new Collection();
["commands", "events"].forEach(p => {
    require(`./handler/${p}`)(client)
});
client.login(process.env.TOKEN)