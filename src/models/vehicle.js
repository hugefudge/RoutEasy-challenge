const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
    modelo: { type: String, lowercase: true },
    placa: { type: String, lowercase: true },
    peso: { type: Number, lowercase: true }
});

module.exports = mongoose.model('vehicle', vehicleSchema);