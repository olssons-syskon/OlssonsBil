let Booking = require('../models/booking');
let Cars = require("../models/cars");

module.exports.get = async (req, res) => {
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
          booked: {
            from: req.body.fromDate,
            to: req.body.toDate
          }
        })
      ///
        res.status(200).send(await Booking.create(req.body));
    } catch (err) {
        res.status(500).send(err.stack)
    }
}

module.exports.delete = async (req, res) => {
    try {
        let booking = await Booking.findOne({ _id: req.params.bookingId })
        console.log(booking)
        await Cars.findOneAndUpdate({ name: booking.car }, {
          booked: {
            from: '2000-01-01',
            to: '2000-01-01'
          }
        })

        await Booking.findOneAndDelete({ _id: req.params.bookingId })
        res.status(200).send('Alles gut')
    } catch(err) {
        console.error(err.stack)
    }
}
