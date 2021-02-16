const Discord = require("discord.js");
const client = new Discord.Client({ disableEveryone: true });

const permission = require("command-permission");
permission.command(client, {
    botOwner: ["684439735833460771"],
    commands: "commands", 
    botPrefix: [">>"], 
    commandHelp: true, 
    commandPrefix: true 
});
 
client.login("TOKEN");
