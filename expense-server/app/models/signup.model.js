const mongoose = require('mongoose');

const signupSchema = mongoose.Schema({
    username : String,
    name     : String,
    password : String
},{
    timestamps  : true
});

module.exports = mongoose.model('signup', signupSchema);