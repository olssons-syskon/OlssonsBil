let Booking = require('../models/booking');
let Cars = require("../models/cars");
let auth = require('./auth');

module.exports.get = async (req, res) => {

  console.log(req.body)
    try {
        res.status(200).send(await Booking.find({}))
    } catch (err) {
        res.status(500).send(err)
    }
}

module.exports.post = async (req, res) => {
    try {
      ///
        await Cars.findOneAndUpdate({ name: req.body.car}, {
          booked: req.body.dates
        })
      ///
        res.status(200).send(await Booking.create(req.body));
    } catch (err) {
        res.status(500).send(err.stack)
    }
}

module.exports.delete = async (req, res) => {
    try {
      // Om admin = ok
      if(await auth.isAdmin(req.headers.authorization)) {

        let booking = await Booking.findOne({ _id: req.params.bookingId })
        console.log(booking)
        await Cars.findOneAndUpdate({ name: booking.car }, {
          booked: []
        })

        await Booking.findOneAndDelete({ _id: req.params.bookingId })
        res.status(200).send('Alles gut')
      } else {
        res.status(500).send('You are not an admin.')
      }

    } catch(err) {
        console.error(err.stack)
    }
}
