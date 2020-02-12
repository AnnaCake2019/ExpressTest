const express = require('express');
const router = express.Router();
const User = require('../modul/user');
const shortId = require('shortid');

router.post('/add', async (req, res) => {
    const {firstName, lastName} = req.body;
    try {
        const id = shortId.generate();
        let user = await User ({
            Id: id,
            firstName,
            lastName});
        await user.save();
        return res.json(user)
    }catch (e) {
        return res.status(500).json({status: 500, massage: JSON.stringify(e)})

    }
});

router.post('/logout/:Id', async (req, res) => {
    const {Id} = req.params;
    const  user = await User.findOne({Id});
    console.log(user);
    if(user){
        return res.status(200).json({status: 200, massage: 'Good bay'});
    }
    return res.status(404).json({status: 404, massage: "This user not found"})
});



module.exports = router;