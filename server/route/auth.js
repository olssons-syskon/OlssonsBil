const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports.post = async (req, res) => {
    let user = await User.findOne({ username: req.body.username });
    let match = await bcrypt.compare(req.body.password, user.password);

    if(match) {
        const token = jwt.sign({ uid: user.uid}, process.env.SECRET);
        res.status(200).send({ username: user.username, authToken: token});
    } else {
        res.status(402).send('Failure! You are not authorised.');
    }
};

module.exports.isAdmin = async authtoken => {
    let token = await jwt.verify(authtoken.substring(7), process.env.SECRET);

    let user = await User.findOne({ uid: token.uid });

    if(user.role === 'admin') {
        return true;
    } else {
        return false;
    };
};

module.exports.verifyToken = async token => {

    try {
        await jwt.verify(token.substring(7), process.env.SECRET);
        return true;
    } catch (err) {
        return false
    }
};