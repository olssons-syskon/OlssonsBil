let mongoose= require('mongoose');

let Schema = mongoose.Schema;

let carsSchema = new Schema({
    name: String,
    model: String,
    color: String,
    price: Number,
    info: String,
    img: String,
    bookable: Boolean,
    booked: {
      from: Date,
      to: Date
    }
});

let Cars = mongoose.model('cars', carsSchema);

module.exports = Cars
