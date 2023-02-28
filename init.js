// Node Modules
import { Client, GatewayIntentBits, Events, Collection } from 'discord.js';
import { config } from 'dotenv';

// Local Modules
import SearchCommands from './src/commandsHandler.js';

// Definitions
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Inits
config()
client.commands = new Collection();

// Destructure
const { setSlashCommands } = SearchCommands(client)

// Set Commands
console.log(setSlashCommands());

// Loggin Capturer
client.on(Events.ClientReady, () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({
    status: 'online',
    activity: {
      name: 'Nipril Server ',
      type: 'PLAYING',
    }
  });
});

// Interactions Capturer
client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.play(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: 'There was an error while executing this command!',
      ephemeral: true,
    });
  }
});

client.login(process.env.BOT_TOKEN);