const mongoose = require('mongoose');

const loginSchema = mongoose.Schema({
    username : String,
    password : String
},{
    timestamps: true
});

module.exports = mongoose.model('login', loginSchema);