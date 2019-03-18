const auth = require('./auth');

module.exports.get = async (req, res) => {
    console.log('You are authorized');

    if(await auth.isAdmin(req.headers.authorization)) {
        res.status(200).send('admin')
    } else {
        res.status(200).send("user")
    }
}
