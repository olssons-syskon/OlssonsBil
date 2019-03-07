let mongoose= require('mongoose');

let Schema = mongoose.Schema;

let carsSchema = new Schema({
    text: String
});

let Cars = mongoose.model('cars', carsSchema);

module.exports = Cars