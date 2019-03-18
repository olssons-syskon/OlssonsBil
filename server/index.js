const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jsonwebtoken = require('jsonwebtoken');

let PASSWORD = 'olssonsbil';

mongoose.connect(`mongodb+srv://olssonsbil:${PASSWORD}@olssonsbilcluster-vkzez.mongodb.net/test?retryWrites=true`, {useNewUrlParser: true})
.then(() => {
    console.info('You are connected to the hive, we will add your technological distinctiveness to our own')
})
.catch(err => {
    console.log('Game over, man! Game over! ' + err)
});

let cars = require('./route/cars');
let booking = require('./route/booking');
let auth = require('./route/auth');
let user = require('./route/users');
let adminItems = require('./route/adminItems')

let app = express();

app.use(express.json());
app.use(cors());

app.listen(3000, () => {
    console.info("Ah, nice! Port 3000! That's the best one!")
});

app.use((req, res, next) => {
   if(auth.verifyToken(req.headers.authorization)){
       next()
   } else {
       res.status(402).send('Access Denied. You suck')
   }
})

app.route('/cars')
.get(cars.get)
.post(cars.post)
.patch(cars.patch)


app.route('/cars/:carId')
.delete(cars.delete)

app.route('/booking')
.get(booking.get)
.post(booking.post)

app.route('/booking/:bookingId')
.delete(booking.delete)

app.route('/auth')
.post(auth.post)

app.route('/users')
.post(user.post)

app.route('/adminItems')
.get(adminItems.get)
