const VoteMap = require('./votemap.js');

require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login(process.env.token);

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});


let memberList = null;

let vote = new VoteMap();

bot.on('message', msg => {
    if (msg.content === '!startvote' && vote.getVoteStatus === false) {
        msg.channel.send('Please vote for one of the four available maps using the commands: "!skeld", "!mirahq", "!polus", or "!airship" (without the ""). Please only vote once.\n');
        vote.startVote();
    }
    else if (msg.content === '!skeld' && vote.getVoteStatus === true) {
        msg.channel.send(`${msg.author.tag} voted for Skeld.`);
        vote.incSkeld();
    }
    else if (msg.content === '!mirahq' && vote.getVoteStatus === true) {
        msg.channel.send(`${msg.author.tag} voted for MiraHQ.`);
        vote.incMirahq();
    }
    else if(msg.content === '!polus' && vote.getVoteStatus === true) {
        msg.channel.send(`${msg.author.tag} voted for Polus.`);
        vote.incPolus();
    }
    else if (msg.content === '!airship' && vote.getVoteStatus === true) {
        msg.channel.send(`${msg.author.tag} voted for Airship.`);
        vote.incAirship();
    }
    else if (msg.content ==='!randmap' && vote.getVoteStatus === true) {
        let randSelection = randNum(4);

        switch (randSelection) {
            case 0:
                msg.channel.send(`${msg.author.tag} voted for Skeld.`);
                vote.incSkeld();
                break;
            case 1:
                msg.channel.send(`${msg.author.tag} voted for MiraHQ.`);
                vote.incMirahq();
                break;
            case 2:
                msg.channel.send(`${msg.author.tag} voted for Polus.`);
                vote.incPolus();
                break;
            case 3:
                msg.channel.send(`${msg.author.tag} voted for Airship.`);
                vote.incAirship();
                break;
            default:
                break;
        }
    }
    else if (msg.content === '!results' && vote.getVoteStatus === true) {
        let finalCount = vote.results();
        msg.channel.send(finalCount);
    }
    else if (msg.content === '!help') {
        msg.channel.send("Commands: \n \
        !help - Displays this help message.\n \
        !startvote - Starts a new round of voting.\n \
        ![skeld, mirahq, polus, airship] - Sends one vote for specified map. Don't include the [ ] symbols when entering your map selection.\n \
        !randmap - vote for a random map.\n \
        !results - Display the results of the vote, then reset all counts to zero.\n");
    }
});

function randNum(max) {
    return Math.floor(Math.random() * max);
}

