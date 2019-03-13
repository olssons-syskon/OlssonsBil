let mongoose= require('mongoose');

let Schema = mongoose.Schema;

let carsSchema = new Schema({
    name: String,
    model: String,
    color: String,
    price: Number,
    bookable: Boolean,
    booked: {
      from: Date,
      to: Date
    }
});

let Cars = mongoose.model('cars', carsSchema);

module.exports = Cars
