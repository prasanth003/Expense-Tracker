const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const expenseModel = new Schema({

    date         :  { type : String},
    amount       :  { type : String},
    source       :  { type : String},
    description  :  { type : String},
    category     :  { type : String},
    trType       :  { type : String},

}, {
    timestamps: true
},{
    collection : "expense-tracker"
});

module.exports = mongoose.model('expenseModel', expenseModel);