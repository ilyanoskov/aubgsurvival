const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema for user profile
const userSchema = new Schema({
    name : String,
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    passwordConfirmation : {
        type : String,
        required : true
    },
    isKilled : {
        type : Boolean,
        required : true
    }
});

//finalize by creating a mongoose model that will handle users
const User = mongoose.model('User', userSchema);

module.exports = User;
