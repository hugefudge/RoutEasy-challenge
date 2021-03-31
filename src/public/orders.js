const getDelivery = async () => {
  const info = getAddressInput();
  const settings = {
      method: 'POST',
      body: JSON.stringify(info),
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      }
  }
  
    const response = await fetch('/address', settings);
    const deliveryData = await response.json();
    console.log(deliveryData); // Endereço da API do google e Input

    sessionStorage.setItem('deliveryData', JSON.stringify(deliveryData));

    infoToPage(deliveryData);
};

const createDelivery = async () => {
    const info = sessionStorage.getItem('deliveryData');
    console.log(info);
    const settings = {
        method: 'POST',
        body: info,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }
    const output = await fetch('/create', settings);
    const response = await output.json();
    console.log(response);
}

const createVehicle = async () => {
    debugger;
  const info = getVehicleInput();
  const settings = {
    method: 'POST',
    body: JSON.stringify(info),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
  }

  const response = await fetch('/vehicle', settings);
  const vehicle = await response.json();
  console.log(vehicle);
}

const loadMarkers = () => {  }


document.addEventListener('DOMContentLoaded', loadMarkers);

document.getElementById('searchAddress').addEventListener('click', getDelivery);
document.getElementById('registerAddress').addEventListener('click', createDelivery);
document.getElementById('registerVehicle').addEventListener('click', createVehicle);
