const Validator = require('validator');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('./models/User');

const token = (user) => {
        let tok = jwt.sign({
            id: user._id,
            name : user.name,
            kills : user.kills,
            isKilled : user.isKilled,
            victimName : user.victimName,
            code : user.code
        }, process.env.APP_SECRET);
        return tok;
}

//main authentication procedure
module.exports.auth = async(req, res) => {
    let db = req.db;
    let found;
    console.log(req.body);
    try {
        found = await User.find({email: req.body.identifier});
        if (found.length > 0) {
            if (req.body.password === found[0].password) {
                res.status(200).json({token : token(found[0])});
            } else {
                res.status(400).json({errors : {form : 'incorrect password'}});
            }
        } else {
            res.status(401).json({errors : {form : 'user does not exist'}});
        };
    } catch (ex) {
        console.error(ex);
    }
};
