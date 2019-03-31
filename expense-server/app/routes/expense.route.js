

module.exports = (app) => {
    const expense = require('../controllers/expense.controller.js');

    app.post('/addExpense', expense.post);

    app.get('/getAllExpense', expense.findAll);

    app.get('/getExpenseById/:expenseId', expense.findOne);

    app.put('/updateExpense/:expenseId', expense.update);

    app.delete('/deleteExpense/:expenseId', expense.delete);
}