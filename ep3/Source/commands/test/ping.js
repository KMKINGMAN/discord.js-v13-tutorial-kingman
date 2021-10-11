module.exports = {
    name: "ping",
    run: (client, kmsg, prefix)=>{
        kmsg.channel.send(`pong`)
    }
}