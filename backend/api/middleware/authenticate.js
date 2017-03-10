const supersecret = require('../supersecret.js');
const jwt = require('jsonwebtoken');

module.exports.auth = (req, res, next) => {
    const authorizationHeader = req.headers['authorization'];
    let token;

    if (authorizationHeader) {
        token = authorizationHeader.split(' ')[1];
    }

    if (token) {
        jwt.verify(token, supersecret.jwtSecret, (err, decoded) => {
            if (err) {
                res.status(401).json({error : "Failed to authenticate"});
            } else {
                res.status(201).json({success : "kill!"});
            }

        });
    } else {
        res.status(403).json({
            error : "no token provided"
        });
    }
}
