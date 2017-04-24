const Validator = require('validator');
const _ = require('lodash');
const shortid = require('shortid');

//load User model
const User = require('./models/User');

//Checks if a user exists in a database
//TODO : ERROR HANDLING
const userExists = async(db, email) => {
    let found = [];
    found = await User.find({email: email});
    return (!_.isEmpty(found));
}

//builds a new user profile
const userBuilder = (body) => {
    let user = new User({
        name: body.name,
        email: body.email,
        password: body.password,
        passwordConfirmation: body.passwordConfirmation,
        victimCode: "to be assigned",
        victimName: "to be assigned",
        isKilled: false,
        kills: 0,
        code: shortid.generate().slice(3)
    });
    return user;
}

const validateInput = async(req) => {
    let db = req.db;
    let data = req.body;
    let errors = {};
    //Check if name was supplied
    if (Validator.isEmpty(data.name
        ? data.name
        : '')) {
        //Check if a user exists with such a name
        errors.name = 'This field is required';
    } else {
        let userExist = await userExists(db, data.email);
        if (userExist) {
            console.log('user exists');
            errors.name = 'User exists';
        }
    }
    //Check if email was supplied
    if (Validator.isEmpty(data.email
        ? data.email
        : '')) {
        errors.email = 'This field is required';
    }
    //Check if it's a legitimate email
    if (!Validator.isEmail(data.email
        ? data.email
        : '')) {
        errors.email = 'Email is invalid';
    }
    //Check if password was supplied
    if (Validator.isEmpty(data.password
        ? data.password
        : '')) {
        errors.password = 'This field is required';
    }
    //Check if passwordConfirmation was supplied
    if (Validator.isEmpty(data.passwordConfirmation
        ? data.passwordConfirmation
        : '')) {
        errors.passwordConfirmation = 'This field is required';
    }
    //Check if password lengths match , password confirmation
    if (!Validator.equals(data.password, data.passwordConfirmation)) {
        errors.passwordConfirmation = 'Passwords must match';
    }

    return {errors, isValid: _.isEmpty(errors)}
}

module.exports.personal = async(req, res) => {
    let response;
    try {
        response = await User.getUserSafe(req.currentUser.id);
    } catch (ex) {
        res.status(500).json({error: "internal server error"});
    }
    res.status(200).json(response);
}

//get all users
module.exports.users = async(req, res) => {
    let response;
    try {
        response = await User.find({});
    } catch (ex) {
        console.error(ex);
        res.send(ex);
    }

    //strip away all sensitive data, leave out only kills and name
    response = response.map(user => {
        return {
            name: user.name,
            kills: user.kills,
            id: user._id,
            isKilled: user.isKilled,
            email : user.email,
            victimName : user.victimName,
            victimCode : user.victimCode
        }
    })

    res.send(response);
};

//delete all users
module.exports.delete = async(req, res) => {
    if (req.body.secret === process.env.APP_SECRET) {
        let response;
        try {
            response = await User.remove({});
        } catch (ex) {
            console.error(ex);
            res.send(ex);
        }
        res.status(200).send(response);
    } else {
        res.status(404).send('wrong secret/ access denied');
    }
}

module.exports.deleteUser = async (req, res) => {
    if (req.body.secret === process.env.APP_SECRET) {
        let response;
        try {
            response = await User.remove({email : req.body.email});
        } catch (ex) {
            console.error(ex);
            res.status(500).send(ex);
        }
        res.status(200).send(response);
    } else {
        res.status(404).send('wrong secret/access denied');
    }
}
// Register a new user
/*
1. Validate the input on the server side
1.5 Check if a user exists in the database
2. Build a user (clean the object from state information)
3. Upload to database
*/

//TODO : Better error handling
module.exports.register = async(req, res) => {
    // all validations happen here
    const {errors, isValid} = await validateInput(req);
    if (!isValid) {
        console.log(errors);
        res.status(400).json(errors);
    } else {
        let db = req.db;
        //user creation logic
        try {
            let response = await(userBuilder(req.body).save(err => {
                if (err)
                    throw err
            }));
            console.log('User created');
            console.log(response);
            res.status(200).send('User created succesfully');
        } catch (ex) {
            res.status(500).send('Internal server error');
            console.error(ex);
        }
    }
};
