// Node Modules
import { REST, Routes } from 'discord.js';

// Local Modules
import { __dirname, commands } from './Global.js';

// Function Export
export default function SearchCommands(client) {
    function setSlashCommands() {
        // Asign Commands
        commands.map(command => {
            client.commands.set(command.commandBuilder.name, command);
        })
        // Slash Commands Register
        const rest = new REST({ version: '10' }).setToken(process.env.BOT_TOKEN);
        // Deploy Commands
        (async () => {
            try {
                console.log(`Started refreshing ${commands.length} application (/) commands.`);

                // The put method is used to fully refresh all commands in the guild with the current set
                const data = await rest.put(
                    Routes.applicationCommands(process.env.BOT_CLIENT),
                    { body: commands.map(command => command.commandBuilder.toJSON()) },
                );

                console.log(`Successfully reloaded ${data.length} application (/) commands.`);
            } catch (error) {
                // And of course, make sure you catch and log any errors!
                console.error(error);
            }
        })();
    }
    function getAppCommands(params) {
        return client.commands
    }
    return {
        setSlashCommands
    }
}