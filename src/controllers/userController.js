const googleApi = require('../services/googleApi');

const Delivery = require('../models/delivery');
const Vehicle = require('../models/vehicle');

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

exports.saveDelivery = async (req, res) => {
  let data = req.body;
  try {
    await Delivery.create(data);

    res.status('200').json({})

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

  }  catch (error) {
    return console.log(error);
  }
}

exports.createDeliveryVehicle = async (req, res) => {
    let data = req.body;
    try {
      await Vehicle.create(data);
  
      res.json('200').json({});
  
    } catch (error) {
      console.log(error);
      
    }
}