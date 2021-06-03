const VoteMap = require('./votemap.js');

require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});



let vote = new VoteMap();

bot.on('message', msg => {
    if (msg.content === '!startvote' && vote.voteStatus === false) {
        msg.channel.send('Please vote for one of the four available maps using the commands: "!skeld", "!mirahq", "!polus", or "!airship" (without the ""). Please only vote once.\n');

        vote.startVote();
    }
    else if (msg.content === '!skeld' && vote.voteStatus === true) {
        msg.channel.send(`${msg.author.tag} voted for Skeld.`);
        vote.incSkeld();
    }
    else if (msg.content === '!mirahq' && vote.voteStatus === true) {
        msg.channel.send(`${msg.author.tag} voted for MiraHQ.`);
        vote.incMirahq();
    }
    else if(msg.content === '!polus' && vote.voteStatus === true) {
        msg.channel.send(`${msg.author.tag} voted for Polus.`);
        vote.incPolus();
    }
    else if (msg.content === '!airship' && vote.voteStatus === true) {
        msg.channel.send(`${msg.author.tag} voted for Airship.`);
        vote.incAirship();
    }
    else if (msg.content === '!results' && vote.voteStatus === true) {
        let finalCount = vote.results();
        msg.channel.send(finalCount);
    }
    
})