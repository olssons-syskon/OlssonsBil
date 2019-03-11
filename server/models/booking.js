let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let bookingSchema = new Schema({
    text: String
});

let Booking = mongoose.model('booking', bookingSchema);

module.exports = Booking