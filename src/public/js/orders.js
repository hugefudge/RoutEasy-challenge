const getDelivery = async () => {
  const info = getInput();
  const settings = {
      method: 'POST',
      body: JSON.stringify(info),
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      }
  }
  
    const res = await fetch('/address', settings);
    const delivery = await res.json();
    console.log(delivery); // Endereço da API do google e Input

    sessionStorage.setItem('deliveryData', JSON.stringify(delivery));

    infoToPage(delivery);
};

const createDelivery = async () => {
    debugger;
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
    const res = await output.json();
 
    if (res == '200') {
        return alert('Entrega cadastrada com sucesso')
        
    } else if (res == '202') {
        return alert ('Endereço já cadastrado') 
        
    } else {
        return alert ('Deu erro mas ninguem sabe porque')
    }
}

const checkDelivery = async (data) => { 
    const response = fetch('urltocheckdelviery'); 
    if(response.status === 500) await checkDelivery();
    if(tem dados) { 
    const data = response.dados;
     await checkDelivery(data);
  //aqui tu pode checar pra ele atualizar só quando tiver novos dados, ou fazer algum tratamento mais inteligente
  alert(dados); 
  await checkDelivery();
  
   }

const loadMarkers = () => {  }


document.addEventListener('DOMContentLoaded', loadMarkers);

document.getElementById('buscar').addEventListener('click', getDelivery);
document.getElementById('cadastrar').addEventListener('click', createDelivery);
