const fs = require("fs")
module.exports = (client) =>{
    fs.readdirSync("./commands").forEach(folder=>{
        const commands = fs.readdirSync(`./commands/${folder}`).filter(f=> f.endsWith('.js'));
        for(let file of commands){
            let cmd = require(`../commands/${folder}/${file}`)
            if(cmd.name){
                client.commands.set(cmd.name, cmd)
            } else {
                continue;
            }
        }
    })
}