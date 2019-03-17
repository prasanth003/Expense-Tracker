module.exports = (ap) => {
    const login = require('../controllers/login.controller.js');

    ap.post('/login', login.create);

}