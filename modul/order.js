const mg = require('mongoose');

const orderSchema = new mg.Schema({
    Id: String,
        serverName: String,
        targetUrl: String,
        price: Number,
        actionName: String,
        Count: Number,
        serviceActions: [Object],
        user: {type: mg.Schema.Types.ObjectID, ref:"User"}


});

module.exports = mg.model('Order', orderSchema);