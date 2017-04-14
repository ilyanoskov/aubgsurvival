const Events = require('./models/Events');

const get = async (req, res) => {
    let events = await Events.find({});
    res.status(200).send(events);
}

const erase = async (req, res) => {
    let response = await Events.remove({});

    if (response) {
        res.status(200).json({
            message : "removed all events succesfuly"
        })
    }
}

module.exports.get = get;
module.exports.erase = erase;
