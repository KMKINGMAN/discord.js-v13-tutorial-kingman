const discord = require("discord.js");
const { Intents } = require("discord.js");
const envdot = require("dotenv");
envdot.config();
const client = new discord.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS
    ]
})
client.on("ready", ()=>{
    console.log("Ready:) ")
})
client.on("messageCreate", (kmsg)=>{
    if(kmsg.author.bot) return;
    if(kmsg.content.startsWith("hi")){
        kmsg.channel.send({content: "hi"})
    }
})
client.login(process.env.TOKEN)
