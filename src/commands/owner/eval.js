module.exports = class Eval extends Interaction {
    constructor() {
        super({
            name: "eval",
            description: "Evaluate code",
            ownerOnly: true,
            options: [{
                type: ApplicationCommandOptionType.String,
                name: "input",
                description: "JS code to evaluate",
                required: true,
            }, ],
        });
    }

    async exec(int, data) {
        const toEval =
            this.client.interactions.get(int.options.getString("input"));

        try {
            let evaled = await eval(toEval);
            const eevaled = typeof evaled;
            evaled = require("util").inspect(evaled, {
                depth: 0,
                maxArrayLength: null,
            });
            const type = eevaled[0].toUpperCase() + eevaled.slice(1);
            let emb = new EmbedBuilder()
                .setColor(0x36393e)
                .setTitle("Eval piece")
                .setDescription(
                    `\`Type:\` ${type}
            \`Input:\` \`\`\`js\n${toEval} \`\`\`
            \`Output:\` \`\`\`js\n${evaled}\`\`\``
                );

            return int.reply({
                embeds: [emb],
                ephemeral: true,
            });
        } catch (error) {
            let embError = new EmbedBuilder()
                .setColor(0x36393e)
                .setTitle("Eval error")
                .setDescription(`\`\`\`${error}\`\`\``);
            return int.reply({
                embeds: [embError],
                ephemeral: true,
            });
        }

    }
};