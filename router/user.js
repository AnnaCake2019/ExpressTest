const express = require('express');
const router = express.Router();
const User = require('../modul/user');

router.get('/:Id', async (req, res) => {
    const {Id} = req.params;
    const user = await User.findOne({Id});
    await res.json({user})
});


module.exports = router;

