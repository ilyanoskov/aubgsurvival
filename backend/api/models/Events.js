const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
Create Event Schema

An event in this game is, of course, murder.
Therefore we want to store the information about who killed whom and when

*/

const eventSchema = new Schema({
    killer : {
        type : String,
        required : true
    },
    victim : {
        type : String,
        required : true
    },
    time : {
        type : Date,
        required : true
    }
});

//finalize by creating a mongoose model that will handle users
const Events = mongoose.model('Events', eventSchema);

module.exports = Events;
