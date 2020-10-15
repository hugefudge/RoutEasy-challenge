const googleApi = require('./googleApi');

exports.validator = (req, res) => {
    // Validate with regex and stuff to do
    const dadosTratados = req.body
    if (dadosTratados) {
        return res.json(dadosTratados);
    } else {
        console.log('Erro ao tratar os dados');
    }
}

exports.getAddress = async (req, res) => {
    const addressInput = req.body.address;
    const googleAddress = await googleApi.googleGeocode(addressInput);
    if (googleAddress) {
        return googleAddress;
    } else {
        console.log('Coulnt get Addres from API');
    }
}

