const express = require('express');
const Delivery = require('../models/delivery');
const action = require('../api/database')
const router = express.Router();

/* router.get('/validation', action.validator); */

router.post('/address', action.getAddress);


module.exports = router;
