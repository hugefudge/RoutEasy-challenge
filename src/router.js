const express = require('express');
const services = require('./controllers/userController')
const router = express.Router();

//router.get('/validation', services.validator); 

router.post('/address', services.getAddress);

router.post('/create', services.saveDelivery);

//router.delete('/remove', services.removeDelivery);

router.delete('/delete', services.deleteAllDeliveries);

router.post('/vehicle', services.createDeliveryVehicle);

module.exports = router;
