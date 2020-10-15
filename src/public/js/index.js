const getInput = () => {
    const input = {
        nome: document.getElementById('nome').value,
        peso: document.getElementById('peso').value,
        address: document.getElementById('searchInput').value
    }
    return input;
};

const leafMap = () => {
    const mymap = L.map('map').setView([-27.5935423, -48.6387116], 13);
    let token = 'pk.eyJ1IjoiaHVnZWZ1ZGdlIiwiYSI6ImNrYjVzdHFlNTB6dmoycG54MnFlY25sMXcifQ.QcmLmiVJ_ESauUJXk4Z0NA'
    L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${token}`, {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1
    }).addTo(mymap);
};

document.addEventListener('readystatechange', () => {    
    if (document.readyState == 'complete') leafMap();
});