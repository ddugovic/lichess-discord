const { SlashCommandBuilder } = require('discord.js');
const { verifyUser } = require('../checkLichessUser');
const { roleId } = require('../config.json')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('verify')
    .setDescription('Verify your Lichess login'),

  async execute(interaction) {
    const discordID = interaction.user.id;
    const determineDiscordVerification = await verifyUser(discordID);

    if (determineDiscordVerification) {
      const role = interaction.guild.roles.cache.get(roleId);
      const discordUser = interaction.guild.members.cache.get(discordID);
      discordUser.roles.add(role);
      await interaction.reply({ content: 'User role granted! Thanks for using Lichess!', ephemeral: true });
    } else {
      await interaction.reply({ content: 'Login cancelled.', ephemeral: true });
    }
  }
};
