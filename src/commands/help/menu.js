const {
    removeDuplicates,
    formatPerms
} = require('../../utils/Utils');

module.exports = class Help extends Interaction {
    constructor() {
        super({
            name: "help",
            description: "Generating help commands tab. (specify a command name for more informations for the selected item)",
            options: [{
                type: ApplicationCommandOptionType.String,
                name: "input",
                description: "Command name for more informations for the selected item",
                required: false,
            }, ],
        });
    }

    async exec(int, data) {
        const cmd =
            this.client.interactions.get(int.options.getString("input"));

        if (!cmd) {
            let emb = new EmbedBuilder()
                .setColor(0x36393e)
                .setFooter({
                    text: `To get info of each command type /help [command]`
                })
                .setDescription(`Commands:\n${this.client.interactions
                    .map((cmd) => `\`${cmd.name}\``)
                    .join(' ')}`)
                .setThumbnail(int.guild.iconURL());

            return int.reply({
                embeds: [emb],
                ephemeral: true,
            });
        } else {
            let emb = new EmbedBuilder()
                .setColor(0x36393e)
                .setThumbnail(int.guild.iconURL())
                .setDescription(
                    [
                        `**Description:** ${cmd.description}`
                    ].join('\n')
                );
            return int.reply({
                embeds: [emb],
                ephemeral: true,
            });
        }
    }
};