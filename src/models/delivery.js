const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    nome: { type: String, required: true, lowercase: true },
    peso: { type: String, required: true },
    lat: { type: String },
    lng: { type: String },
    rua: { type: String, unique: true },
    bairro: { type: String },
    cidade: { type: String },
    estado: { type: String },
    pais: { type: String },
    cep: { type: String },
});

module.exports = mongoose.model('delivery', clientSchema);