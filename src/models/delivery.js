const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    nome: { type: String, required: true, lowercase: true },
    peso: { type: String, required: true },
    placeId: { type: String, required: true },
    endereco: { type: String, required: true },
    rua: { type: String },
    bairro: { type: String },
    cidade: { type: String },
    estado: { type: String },
    pais: { type: String },
    cep: { type: String },
    latitude: { type: String },
    longitude: { type: String }
});

module.exports = mongoose.model('delivery', clientSchema);