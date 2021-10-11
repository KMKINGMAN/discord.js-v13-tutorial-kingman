const fs = require("fs")
module.exports = (client) => {
    let Commands = [];
    fs.readdirSync(`./SlachCommands/`).forEach(folder => {
        const command = fs.readdirSync(`./SlachCommands/${folder}`).filter(f => f.endsWith(".js"))
        for (const file of command) {
            let cmd = require(`../SlachCommands/${folder}/${file}`)
            if(cmd.name){
                client.SlachCommands.set(cmd.name , cmd)
                Commands.push(cmd)
            } else {
                continue;
            }
        }  
    });
    client.on("ready", async()=>{
        try{
            Commands.forEach(async cmd => {
                await client.guilds.cache.forEach(async guild => {
                    await guild.commands.create(cmd)
                })
            })
        } catch(err) {
            console.log(err)
        }
    })
}