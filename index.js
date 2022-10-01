const{Client,GatewayIntentBits}= require('discord.js')
require('dotenv/config')

const client = new Client({
    intents : [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.DirectMessages,

    ],
});

client.on('ready',()=> {
    console.log("The Bot is ready!!")
})

client.on('messageCreate', message =>{
    if (message.content == 'ping'){
    message.reply('pong')
}})

client.login(process.env.TOKEN)
