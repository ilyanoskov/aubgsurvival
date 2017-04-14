const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema for user profile
const userSchema = new Schema({
    name : {
        type : String,
        required : true
    },
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
    },
    kills : {
        type : Number,
        required : true
    },
    code : {
        type : String,
        required : true
    },
    victimCode : {
        type : String
    },
    victimName : {
        type : String,
        required : true
    }
});

userSchema.statics.getUserSafe = async (id,err) => {
    if (err) return err;
    let user = await User.findById(id);
    if (!user) return;
    else return {
        name : user.name,
        kills : user.kills,
        isKilled : user.isKilled,
        email : user.email,
        victimName : user.victimName,
        code : user.code,
        id : user._id
    }
}

//finalize by creating a mongoose model that will handle users
const User = mongoose.model('User', userSchema);

module.exports = User;
