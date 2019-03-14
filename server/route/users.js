let uuid = require('uuid/v4');
let User = require('../models/User');
let Auth = require('./auth');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports.post = async (req, res) => {
    console.log('whaa1! ' + req.body);
    try {
        
        let newUser = {
            uid: uuid(),
            role: req.body.role,
            username: req.body.username,
            password: await bcrypt.hash(req.body.password, saltRounds)
        }

        let user = await User.create(newUser);

        res.status(200).send(user);
    } catch(err) {
        res.status(400).send(err.stack)
    }
}