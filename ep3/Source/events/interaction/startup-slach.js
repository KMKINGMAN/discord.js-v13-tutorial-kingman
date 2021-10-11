module.exports = {
    name: "interactionCreate",
    run: async (interaction, client) => {
        if(!interaction.isCommand()) return;
        let cmd = client.SlachCommands.get(interaction.commandName);
        if(!cmd){
            return interaction.reply({
                content:`Sometink went Wrong!!`
            })
        }
        cmd.run(client, interaction)
    }
}