const expenseModel = require('../models/expense.model.js');

// add new expense

exports.create = (req, res) => {
    
    if(!req.body.content) {
        return res.status(400).send({
            message: "expense content can not be empty"
        });
    }

    const addExpense = new expenseModel({
        date           :  req.body.date,
        amount         :  req.body.amount,
        source         :  req.body.source,
        description    :  req.body.description,
        category       :  req.body.category,
        trType         :  req.body.trType
    });

    addExpense.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while adding the expenses"
        });
    });
};
// Retrieve and return all expenses from the database.
exports.findAll = (req, res) => {
    expenseModel.find()
    .then(expenses => {
        res.send(expenses);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while reading expenses."
        });
    });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
    expenseModel.findById(req.params.expenseId)
    .then(expense => {
        if(!expense) {
            return res.status(404).send({
                message: "Expense not found with id " + req.params.expenseId
            });            
        }
        res.send(expense);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Expense not found with id " + req.params.expenseId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving expense with id " + req.params.expenseId
        });
    });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Expense content can not be empty"
        });
    }

    // Find note and update it with the request body
    expenseModel.findByIdAndUpdate(req.params.expenseId, {
        date           :  req.body.date,
        amount         :  req.body.amount,
        source         :  req.body.source,
        description    :  req.body.description,
        category       :  req.body.category,
        trType         :  req.body.trType
    }, {new: true})
    .then(expense => {
        if(!expense) {
            return res.status(404).send({
                message: "expense not found with id " + req.params.expenseId
            });
        }
        res.send(expense);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "expense not found with id " + req.params.expenseId
            });                
        }
        return res.status(500).send({
            message: "Error updating expense with id " + req.params.expenseId
        });
    });
};
// Delete a note with the specified expenseId in the request
exports.delete = (req, res) => {
    expenseModel.findByIdAndRemove(req.params.expenseId)
    .then(expense => {
        if(!expense) {
            return res.status(404).send({
                message: "Expense not found with id " + req.params.expenseId
            });
        }
        res.send({message: "Expense deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Expense not found with id " + req.params.expenseId
            });                
        }
        return res.status(500).send({
            message: "Could not delete expense with id " + req.params.expenseId
        });
    });
};