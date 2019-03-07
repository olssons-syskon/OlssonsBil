let Cars = require("../models/cars");

module.exports.get = async (req, res) => {
    try {
        res.status(200).send(await Cars.find({}));
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports.post = async (req, res) => {
    try {
        res.status(200).send(await Cars.create(req.body));
    } catch (err) {
        res.status(500).send(err.stack);
    }
};