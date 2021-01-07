const googleApi = require('./googleApi');
const Delivery = require('../models/delivery');

exports.getAddress = async (req, res) => {

    try {
        const googleAddress = await googleApi.googleGeocode(req.body.address);
        let deliveryData = Object.assign(req.body, googleAddress);

        res.json(deliveryData);

    } catch (error) {
        console.log(error);
        
        res.json(error);
    }
};

exports.saveDataToMongo = async (req, res) => {
    let data = req.body;
        try {
            await Delivery.create(data);

            res.json('200')

        } catch (error) {
            if (error.code == '11000') {
                res.json('202') // Cliente já cadastrado
            }
        }
};

exports.deleteAllDeliveries = async (req, res) => {
    try {
        await Delivery.collection.deleteMany({});

        res.json('All data removed');

    } catch (error) {
        return console.log(error);
    }
}