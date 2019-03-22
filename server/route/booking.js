let Booking = require('../models/booking');
let Cars = require("../models/cars");
let auth = require('./auth');

module.exports.get = async (req, res) => {

    try {
        res.status(200).send(await Booking.find({}))
    } catch (err) {
        res.status(500).send(err)
    }
}

module.exports.post = async (req, res) => {
    try {
      console.log(req.body)
        await Cars.findOneAndUpdate({ name: req.body.car}, {
          booked: req.body.dates,
          bookable: false
        })
        res.status(200).send(await Booking.create(req.body));
    } catch (err) {
        res.status(500).send(err.stack)
    }
}

module.exports.delete = async (req, res) => {
    try {
      // Om admin = ok
        let booking = await Booking.findOne({ _id: req.params.bookingId })
        await Cars.findOneAndUpdate({ name: booking.car }, {
          booked: [],
          bookable: true
        })

        await Booking.findOneAndDelete({ _id: req.params.bookingId })
        res.status(200).send('Alles gut')
    } catch(err) {
        console.error(err.stack)
    }
}
