let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let bookingSchema = new Schema({
    dates: Array,
    car: String,
    cost: Number,
    booker: String
});

let Booking = mongoose.model('booking', bookingSchema);

module.exports = Booking
