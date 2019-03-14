let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');

let PASSWORD = '';

mongoose.connect(`mongodb+srv://olssonsbil:${process.env.PASSWORD}@olssonsbilcluster-vkzez.mongodb.net/test?retryWrites=true`, {useNewUrlParser: true})
.then(() => {
    console.info('You are connected to the hive, we will add your technological distinctiveness to our own')
})
.catch(err => {
    console.log('Game over, man! Game over! ' + err)
});

let cars = require('./route/cars');
let booking = require('./route/booking');

let app = express();

app.use(express.json());
app.use(cors());

app.route('/cars')
.get(cars.get)
.post(cars.post)
.patch(cars.patch)


app.route('/cars/:carId')
.delete(cars.delete)

app.route('/booking')
.get(booking.get)
.post(booking.post)
.delete(booking.delete)

app.listen(3000, () => {
    console.info("Ah, nice! Port 3000! That's the best one!")
});