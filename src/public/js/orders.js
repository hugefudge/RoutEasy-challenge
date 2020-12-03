const createDelivery = async () => {

  const info = getInput();
  const settings = {
      method: 'POST',
      body: JSON.stringify(info),
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      }
  }
  
    const reponse = await fetch('/address', settings);
    const delivery = await reponse.json();
    console.log(delivery); // Endereço da API do google e Input

    infoToPage(delivery);
};

const loadMarkers = () => {

}

document.addEventListener('DOMContentLoaded', loadMarkers);

document.getElementById('buscar').addEventListener('click', createDelivery);