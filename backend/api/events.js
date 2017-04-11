const Events = require('./models/Events');

const get = async (req, res) => {
    let events = await Events.find({});
    res.status(200).send({
        killer : "Ilya Noskov",
        victim : "Your Mom"
    });
}

module.exports.get = get;
