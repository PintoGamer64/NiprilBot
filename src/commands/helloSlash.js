// Node Modules
import { SlashCommandBuilder } from 'discord.js';
import { SlashCommand } from '../utils/slashCommand.js';

export default class Hello extends SlashCommand {
  constructor() {
    const command = new SlashCommandBuilder()
      .setName('hola')
      .setDescription('Dira Hola!');
    super(command);
  }

  async play(interaction) {
    await interaction.reply('Hola!');
  }
}