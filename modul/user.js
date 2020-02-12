const mg = require('mongoose');
const Schema = mg.Schema;
const userSchema = new mg.Schema({
    Id: String,
    firstName: String,
    lastName: String,
    Orders: [Object]
});

module.exports = mg.model('User', userSchema);