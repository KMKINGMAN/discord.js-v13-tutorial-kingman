const fs = require("fs")
module.exports = (client) =>{
    fs.readdirSync("./events").forEach(folder => {
        const events = fs.readdirSync(`./events/${folder}`).filter(f => f.endsWith(".js"))
        for(let file of events){
            let even = require(`../events/${folder}/${file}`)
            if(even.name){
                client.events.set(even.name, even)
                client.on(even.name, (...args) => even.run(...args, client));
            } else {
                continue;
            }
        }
    })
}