let Cars = require("../models/cars");

module.exports.get = async (req, res) => {
    try {
        res.status(200).send(await Cars.find({}));
    } catch (err) {
        res.status(500).send(err.stack);
    }
};

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
