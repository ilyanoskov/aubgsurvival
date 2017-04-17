/*
Here we have a simple authentication middleware to authenticate the KILL

*/

const User = require('../models/User.js')
const jwt = require('jsonwebtoken');

module.exports.auth = (req, res, next) => {
    const authorizationHeader = req.headers['authorization'];
    let token;

    if (authorizationHeader) {
        token = authorizationHeader.split(' ')[1];
    }

    if (token) {
        jwt.verify(token, process.env.APP_SECRET, (err, decoded) => {
            if (err) {
                res.status(401).json({error : "Failed to authenticate"});
            } else {
                User.getUserSafe(decoded.id).then(user => {
                    if (!user) {
                        res.status(404).json({error : 'No such user'});
                    }
                    req.currentUser = user;
                    next();
                })

            }
        });
    } else {
        res.status(403).json({
            error : "no token provided"
        });
    }
}
