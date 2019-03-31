const Login = require('../models/login.model.js');

exports.Create = function(res,req){
     // Validate request
     if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    if(!req.body.content) {
        return res.status(404).send({
            message: "404 Not found"
        });
    }
    // Create a Note
    const note = new Login({
        title: req.body.title || "Untitled Note", 
        content: req.body.content
    });

    // Save Note in the database
    note.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
}
