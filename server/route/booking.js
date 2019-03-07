let Booking = require('../models/booking');

module.exports.get = async (req, res) => {
    try {
        res.status(200).send(await Booking.find({}))
    } catch (err) {
        res.status(500).send(err)
    }
}

module.exports.post = async (req, res) => {
    try {
        res.status(200).send(await Booking.create(req.body));
    } catch (err) {
        res.status(500).send(err.stack)
    }
}