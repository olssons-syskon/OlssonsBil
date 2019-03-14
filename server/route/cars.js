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
module.exports.put = async (req, res) => {
    try {
        res.status(200).send(await Cars.findOneAndUpdate({ _id: req.params.carId }, req.body, { new: true }));
    } catch (err) {
        res.status(500).send(err.stack)
    }
}