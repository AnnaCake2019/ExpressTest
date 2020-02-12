const express = require('express');
const router = express.Router();
const User = require('../modul/user');
const Order = require('../modul/order');
const shortId = require('shortid');
router.post('/addOr/:Id', async (req, res) => {
    const {Id} = req.params;
    const {serverName, targetUrl, price, actionName, count} = req.body;
    try {
        const idO = shortId.generate();
        const order = new Order({
            Id: idO,
            serverName,
            targetUrl,
            price,

        });
        order.serviceActions.push(
            {
                actionName,
                count
            }
        );
        const user = await User.findOne({Id});
        user.Orders.push(order);
        await user.save();
        return res.json(user);
    } catch (e) {
        return res.status(404).json({status: 404, massage: "Error"})
    }
});
router.post('/add', async (req, res) => {
    const {firstName, lastName} = req.body;
    try {
        const id = shortId.generate();
        let user = await User({
            Id: id,
            firstName,
            lastName
        });
        await user.save();
        return res.json(user)
    } catch (e) {
        return res.status(500).json({status: 500, massage: JSON.stringify(e)})
    }
});
module.exports = router;