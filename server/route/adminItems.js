const auth = require('./auth');

module.exports.get = async (req, res) => {
    console.log('You are authorized');

    if(await auth.isAdmin(req.headers.authorization)) {
        res.status(200).send(['Admin', 'You are'])
    } else {
        res.status(403).send("You faker! You're no admin")
    }
}
