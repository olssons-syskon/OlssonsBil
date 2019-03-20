let uuid = require('uuid/v4');
let User = require('../models/User');
let Auth = require('./auth');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports.post = async (req, res) => {

    try {

        console.log(await User.findOne({username: req.body.username}))

        if(await User.findOne({username: req.body.username})) {
            res.status(200).send({notInUse: false, message: 'Username already in use'});
        } else {
            let newUser = {
                uid: uuid(),
                role: req.body.role,
                username: req.body.username,
                password: await bcrypt.hash(req.body.password, saltRounds)
            }
    
            let user = await User.create(newUser);
    
            res.status(200).send({notInUse: true, user: user});
        }
        
    } catch(err) {
        res.status(400).send(err.stack)
    }
}