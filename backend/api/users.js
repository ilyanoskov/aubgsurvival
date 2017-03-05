const Validator = require('validator');
const _ = require('lodash');

//Checks if a user exists in a database
const userExists = async(db, name) => {
    let found = [];
    found = await db.collection('users').find({name: name});
    return (!_.isEmpty(found));
}

//builds a new user profile, stripping down unnecessary front-end stuff
const userBuilder = (body) => {
    let user = {};
    user.name = body.name;
    user.email = body.email;
    user.password = body.password;
    user.passwordConfirmation = body.passwordConfirmation;
    return user;
}

const validateInput = async (req) => {
    let db = req.db;
    let data = req.body;
    let errors = {};
    //Check if name was supplied
    if (Validator.isEmpty(data.name
        ? data.name
        : '')) {
        //Check if a user exists with such a name
        errors.name =
        'This field is required';
    } else {
        let userExist = await userExists(db, data.name);
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

// Get all users in the database, useful for debugging
module.exports.users = async(req, res) => {
    let db = req.db;
    let response;
    try {
        response = await db.collection('users').find();
    } catch (ex) {
        console.error(ex);
    }
    res.send(response);
};

// Register a new user
/*
1. Validate the input on the server side
1.5 Check if a user exists in the database
2. Build a user (clean the object from state information)
3. Upload to database
*/

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
            let response = await db.collection('users').insert(userBuilder(req.body));
            console.log('User created');
            console.log(response);
            res.status(200).send('User created succesfully');
        } catch (ex) {
            res.status(500).send('Internal server error');
            console.error(ex);
        }
    }
};

module.exports.login = async(req, res) => {
    let db = req.db;
    let found;
    try {
        found = await db.collection('users').find({login: req.headers.login});
        if (found.length > 0) {
            if (req.headers.password === found[0].password) {
                res.status(200).send('correct password');
            } else {
                res.status(400).send('incorrect password');
            }
        } else {
            res.status(401).send('user does not exist')
        };
    } catch (ex) {
        console.error(ex);
    }
};
