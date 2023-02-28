export class SlashCommand {
    constructor(commandBuilder) {
        this.commandBuilder = commandBuilder;
    }

    async play(interaction) {
        throw new Error('El método run debe ser implementado en la subclase');
    }
}