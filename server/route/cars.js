let Cars = require("../models/cars");

//show all cars
/* module.exports.get = async (req, res) => {
    console.log(req.query)
    console.log(req.query.value)


    try {
        res.status(200).send(await Cars.find({}));
    } catch (err) {
        res.status(500).send(err.stack);
    }

}; 
 */


module.exports.get = async (req, res) => {
    if (req.query.value) {
        console.log("You choosed range")
        console.log(req.query.value)
        try {
            //res.status(200).send(await Cars.find({ price: { $gte: min, $lte: value } }).sort({ price: 1 }));
            res.status(200).send(await Cars.find({ price: { $gte: 0, $lte: req.query.value } }).sort({ price: 1 }));

        } catch (err) {
            res.status(500).send(err.stack);
        }
    }
    else {
        try {

            res.status(200).send(await Cars.find({}));
        } catch (err) {
            res.status(500).send(err.stack);
        }
    }

};  

//create a new car in db
module.exports.post = async (req, res) => {
    try {
        res.status(200).send(await Cars.create(req.body));
    } catch (err) {
        res.status(500).send(err.stack);
    }
};

//delete one car
module.exports.delete = async (req, res) => {

    try {
        res.status(200).send(await Cars.findOneAndDelete({ _id: req.params.carId }));
    } catch (err) {
        res.status(500).send(err.stack);
    }
}


//update one
module.exports.patch = async (req, res) => {
    console.log(req.body)
    try {
        res.status(200).send(await Cars.findOneAndUpdate({ _id: req.body._id }, {
            name: req.body.name,
            model: req.body.model,
            price: req.body.price,
            info: req.body.info,
            bookable: req.body.bookable,
            booked: [
              req.body.booked
            ],
            color: req.body.color
        },
            { new: true }));
    } catch (err) {
        res.status(500).send(err.stack)
    }
}

