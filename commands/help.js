const Discord = require ("discord.js"); // eslint-disable-line no-unused-vars
const Command = require("../base/Command.js");

class Help extends Command {
  constructor (client) {
    super(client, {
      name: "help",
      description: "Learn how to use Utility's commands.",
      category: "General",
      usage: "[category/alias]",
      enabled: true,
      guildOnly: false,
      aliases: ["halp"],
      permLevel: "User",
      cooldown: 5,
      args: false
    });
  }

  async run (message, args, level, reply) { // eslint-disable-line no-unused-vars
      if (!args[0]) {
        const emb = new Discord.MessageEmbed()
          .setAuthor(message.author.tag, message.author.displayAvatarURL())
          .setColor("#2A7AAF")
          .addField("Moderation - `" + message.guild.settings.prefix + "help moderation`", `Commands helping you moderate your server.`)
          .addField("General - `" + message.guild.settings.prefix + "help general`", `General commands.`)
          .addField("Utility - `" + message.guild.settings.prefix + "help utility`", `Feature rich utility commands.`)
        reply(emb);
     } else if (args[0].toLowerCase() === "moderation") {
       var cmds = this.client.commands.filter(c => c.help.category === "Moderation" && c.conf.enabled === true);
       cmds = cmds.map(cmd => `**${cmd.help.name.toProperCase()} - \`${message.guild.settings.prefix}${cmd.help.name}\`**\n${cmd.help.description}`)

       const emb = new Discord.MessageEmbed()
         .setAuthor(message.author.tag, message.author.displayAvatarURL())
         .setColor("#2A7AAF")
         .setDescription(`${cmds.join("\n")}\n\n`);
        reply(emb);
     } else if (args[0].toLowerCase() === "general") {
       var cmds = this.client.commands.filter(c => c.help.category === "General" && c.conf.enabled === true);
       cmds = cmds.map(cmd => `**${cmd.help.name.toProperCase()} - \`${message.guild.settings.prefix}${cmd.help.name}\`**\n${cmd.help.description}`)

       const emb = new Discord.MessageEmbed()
         .setAuthor(message.author.tag, message.author.displayAvatarURL())
         .setColor("#2A7AAF")
         .setDescription(`${cmds.join("\n")}\n\n`);
        reply(emb);
     } else if (args[0].toLowerCase() === "utility") {
       var cmds = this.client.commands.filter(c => c.help.category === "Utility" && c.conf.enabled === true);
       cmds = cmds.map(cmd => `**${cmd.help.name.toProperCase()} - \`${message.guild.settings.prefix}${cmd.help.name}\`**\n${cmd.help.description}`)

       const emb = new Discord.MessageEmbed()
         .setAuthor(message.author.tag, message.author.displayAvatarURL())
         .setColor("#2A7AAF")
         .setDescription(`${cmds.join("\n")}\n\n`);
        reply(emb);
     } else {
       const command = this.client.commands.get(args[0].toLowerCase());
       if (!command) return reply(`Command/Category not found.`);
       var enab = command.conf.enabled ? "Yes" : "No";
       var cperm = command.conf.permLevel;
       const emb = new Discord.MessageEmbed()
         .setAuthor(message.author.tag, message.author.displayAvatarURL())
         .setColor("#2A7AAF")
         .setDescription(`${command.help.name.toProperCase()} - Info\n**Name**: ${command.help.name}\n**Description**: ${command.help.description}\n**Category**: ${command.help.category}\n**Usage**: \`${message.guild.settings.prefix}${command.help.name} ${command.help.usage}\`\n**Cooldown**: ${command.conf.cooldown} Seconds\n**Minimum Rank**: ${command.conf.rank}\n**Enabled**: ${enab}\n**Permission Level**: ${cperm}\n\n`);
       reply(emb);
     }

  }
}

module.exports = Help;
