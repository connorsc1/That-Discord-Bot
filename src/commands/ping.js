const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setname('Ping')
    .setDescription('Returns bots ping')
  async execute(interaction, client) {
    const message = await interaction.deferReply({
      fetchReply: true
    })

    const newMessage = `API latency: ${client.ws.ping}\nClient Ping: ${message.createdTimestamp - interaction.createdTimestamp}`
    await interaction.editReply({
      content: newMessage
    });
  }
} 