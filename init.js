// Node Modules
import { Client, GatewayIntentBits } from 'discord.js';
import { config } from 'dotenv';

// Local Modules
import SearchCommands from './src/commandsHandler.js';

// Definitions
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Inits
config()

// Destructure
const { getSlashCommands } = SearchCommands()

// Set Commands
console.log(getSlashCommands());

// Loggin Capturer
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Interactions Capturer
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: 'There was an error while executing this command!',
      ephemeral: true,
    });
  }
});

client.login(process.env.BOT_TOKEN);