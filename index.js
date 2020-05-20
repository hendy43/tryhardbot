var Discord = require('discord.io')
var logger = require('winston');
var auth = require('./auth.json');

// const url = new URL(url ["https://api.opendota.com/api/players/384861297", base])

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.substring(0, 1) == '*') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'pong':
                bot.sendMessage({
                    to: channelID,
                    message: 'ping'
                });
            break;
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'pong'
                });
            break;
            case 'id':
                bot.sendMessage({
                    to: channelID,
                    message: userID
                });
            break;
            case 'name':
                bot.sendMessage({
                    to: channelID,
                    message: user
                });
            break;
            case 'vincent':
                bot.sendMessage({
                    to: channelID,
                    message: 'tukang hisap'
                });
            break;
            // buat tambah command lagi
         }
     }
});

// bot.on('message', msg=>{
//     if(msg.content === "woi"){
//         msg.reply('ape anjing');
//     }
// })
