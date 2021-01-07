const express = require('express');
const action = require('../api/database')
const router = express.Router();

//router.get('/validation', action.validator); 

router.post('/address', action.getAddress);

router.post('/create', action.saveDataToMongo);

//router.delete('/remove', action.removeDelivery);

router.delete('/delete', action.deleteAllDeliveries);

module.exports = router;
