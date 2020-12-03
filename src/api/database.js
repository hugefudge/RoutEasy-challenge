const googleApi = require('./googleApi');
const mongoose = require('mongoose');

/* exports.validator = (req, res) => {
    const {inputName} = req.body.nome;

    if (inputName != "^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?") {
        return res.json('Digite um nome valido');
    } else {
        return inputName;
    };
    
    const {inputPeso} = req.body.peso;
    this.inputForm = new FormGroup({
        validators: Validators.compose([
            Validators.required,
            Validators.pattern("^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)")
        ]),
        updateOn: 'blur'
    })
    // Validate with regex and stuff
    const dadosTratados = req.body
    if (dadosTratados) {
        return res.json(dadosTratados);
    } else {
        console.log('Erro ao tratar os dados');
    }
} */

exports.getAddress = async (req, res) => {

    try {
        const googleAddress = await googleApi.googleGeocode(req.body.address);
        let delivery = [Object.assign(req.body, googleAddress)];

        let deliveryInfo = {
            latitude: delivery[0].lat,
            longitude: delivery[0].lng,
            endereco: delivery[0].fullAddress,
            nome: delivery[0].name,
            peso: delivery[0].weight,
        };

        res.json(deliveryInfo); // Só é necessário retornar {lat, lng, address,nome, peso} resto fica no back pra ser tratado
        //saveDataToDatabase(delivery);

    } catch (error) {
        console.log(error);
        
        res.json(error);
    }
};

const saveDataToDatabase = (data) => {
    if (data) {
        mongoose.save(data);
    }

}