const User = require('./models/User');


function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

const initialAssign = async (req, res) => {
    let players = await User.find({});
    for (let i = 0; i < players.length-1; i++) {
        let victimIndex = randomIntFromInterval(i + 1, players.length - 1);
        players[i].victimCode = players[victimIndex].code;
        players[i].victimName = players[victimIndex].name;

        //move the victim to get an assignment in next turn
        let temp = players[i+1];
        players[i+1] = players[victimIndex];
        players[victimIndex] = temp;
    }
    players[players.length - 1].victimCode = players[0].code;
    players[players.length - 1].victimName = players[0].name;
    let response = await User.remove({});
    if (response) {
        User.insertMany(players);
        res.status(200).json({
        message : "assignment finished"
        });
    }
}


module.exports = {
    initialAssign : initialAssign
}
