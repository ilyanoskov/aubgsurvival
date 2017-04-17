const _ = require('lodash');
import Validator from 'validator';

const validateInput = (req) => {
    let data = req.body;
    let errors = {};
    //Check if name was supplied
    if (Validator.isEmpty(data.name
        ? data.name
        : '')) {
        //Check if a user exists with such a name
        errors.name =
        'This field is required';
    }

    //Check if email was supplied
    if (Validator.isEmpty(data.email)) {
        errors.email = 'This field is required';
    }
    //Check if it's a legitimate email
    if (!Validator.isEmail(data.email
        ? data.email
        : '')) {
        errors.email = 'Email is invalid';
    }
    //Check if it's an AUBG e-mail
    if (!data.email.substring(6,13) === "@aubg.edu") {
        errors.email = 'Must be an AUBG e-mail'
        console.log(errors.email);
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

module.exports = validateInput;
