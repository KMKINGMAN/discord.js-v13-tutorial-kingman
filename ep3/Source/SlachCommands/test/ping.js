module.exports = {
    name: "ping",
    description: "return PONG",
    type: "CHAT_INPUT",
    run: async(client, interaction) => {
        interaction.reply({
            content: `***PONG !!!***`
        })
    }
}