const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var mongodb     = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://expense:1234@cluster0-djciu.mongodb.net/test?retryWrites=true";
const uri = "mongodb+srv://expense-tracker:1234@cluster0-vr1ws.mongodb.net/test?retryWrites=true";

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// require('./app/routes/expense.route.js')(app);
// require('./app/routes/login.route.js')(app);
// Add headers
app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();

});

MongoClient.connect(uri, { useNewUrlParser: true }, (err, client) => {
    if (err) return console.log(err)
    db = client.db('expense-tracker')
    
    app.listen(3200, () => {
        console.log("Database connected and server listing")
    })

    app.post('/add-expense', (req, res) => {
        db.collection('expense').save(req.body, (err, result) => {
            if(err) return console.log(err)
            console.log('success',result)
            return result
        })
    })

    app.get('/get-expense', (req, res) => {
        db.collection('expense').find().toArray(function(err, result) {
            if(err) return console.log(err)
            res.send(result);
        })

    })

    app.get('/get-expense-by-id/:expenseId', (req, res) => {
        var id = req.params.expenseId;
        db.collection('expense').findOne({_id: new mongodb.ObjectID(id)}, function(err, result){
            if(err) return console.log(err)
            res.send(result)
            console.log(result)
        })
    })
    
})

app.get('/', (req, res) => {
    res.json({"message": "Welcome to Expense Tracker Server"});
});



