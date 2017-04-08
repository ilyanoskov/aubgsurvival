//load events model
const Events = require('./models/Events');

const kill = (req, res) => {
    res.status(200).send('OK');

}

module.exports.kill = kill;
