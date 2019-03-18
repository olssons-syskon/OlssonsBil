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

module.exports.delete = async (req, res) => {
    try {
        await Booking.findOneAndDelete({ _id: req.params.bookingId })
        res.status(200).send('Alles gut')
    } catch(err) {
        console.error(err.stack)
    }
}