const User = require('./models/User');

const stats = async(req, res) => {
    let dead = 0;
    let alive = 0;
    try {
        let users = await User.find({});

        for (let i = 0; i < users.length; i++) {
            let user = users[i];
            if (user.isKilled === true) {
                dead++;
            }
        }

        alive = users.length - dead;
        let stats = {
            alive: alive,
            dead: dead
        }

    } catch (ex) {
        console.log(ex);
        res.status(500).json({"error": "there was an error"});
    }
    res.status(200).json({alive: alive, dead: dead});
}

module.exports.stats = stats;
