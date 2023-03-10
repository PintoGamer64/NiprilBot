// Node Modules
import { SlashCommandBuilder } from 'discord.js';
import { SlashCommand } from '../utils/slashCommand.js';

export default class Ping extends SlashCommand {
  constructor() {
    const command = new SlashCommandBuilder()
      .setName('ping')
      .setDescription('Responde con Pong!');
    super(command);
  }

  async play(interaction) {
    await interaction.reply('Pong!');
  }
}