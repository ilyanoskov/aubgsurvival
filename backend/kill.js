//load events model
const Events = require('./models/Events');
const User = require('./models/User');

/*

Kill functionality :

1. find a user by the victimId
2. compare victim's code to the supplied code
    if it does not work - send the response back that it failed
3. change victim's isKilled to true
4. send the response back that the kill is succesful
5. add a new event to all events, who killed who

*/

const kill = async(req, res) => {
    //check if the user sending the request is alive
    let user = await User.findOne(req.currentUser);
    if (user.isKilled === false) {
    //get the victimCode from request
    let victimCode = req.body.code;
    //get the name of the victim to be killed

    //find the potential victim by code
    let victim = await User.findOne({code: victimCode});

    //if it's not found throw error
    if (!victim) {
        res.status(404).json({error: "no user found"});
    } else {
        //if it's found , compare two names and two codes
        if (victimCode == victim.code) {
            //time to kill!!!
            try {
                reassign(req.currentUser.code).then(newEvent(req.currentUser.name, usersVictimName));

            } catch (ex) {
                res.status(500).json({error: "internal server error"});
                return ex;
            }
            res.status(200).json({message: "killing is succesful"});
        }
    }
} else {
    res.status(400).json({error : "you are dead you can't kill, sorreh"});
}
}

const reassign = async(code) => {
    //get all alive users
    let players = await User.find({isKilled: false});
    let player = await User.findOne({code: code});
    let victim = player.victimCode;

    let playerIndex;
    let victimIndex;
    for (let i = 0; i < players.length; i++) {
        //find the index of the player
        if (players[i].code === code) {
            playerIndex = i;
        };

        //find the index of the victim
        if (players[i].code === victim) {
            victimIndex = i;
        }
    }

    //reassign the victim of the killer
    players[playerIndex].victimCode = players[victimIndex].victimCode;
    players[playerIndex].victimName = players[victimIndex].victimName;
    //kill the victim
    players[victimIndex].isKilled = true;

    //update the killer in DB
    let response = await User.update({
        email: players[playerIndex].email
    }, {
        victimCode: players[playerIndex].victimCode,
        victimName: players[playerIndex].victimName,
        $inc: {
            kills: 1
        }
    });

    //update the victim in DB
    let response2 = await User.update({
        email: players[victimIndex].email
    }, {isKilled: players[victimIndex].isKilled});

    if (response && response2) console.log('success');
}

const newEvent = (killer, victim) => {
    let e = new Events({killer: killer, victim: victim, time: Date.now()});

    e.save(err => { return err});
}

module.exports.kill = kill;
