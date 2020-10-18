const createDelivery = async () => {
  debugger;
  const info = getInput();
  const settings = {
      method: 'POST',
      body: JSON.stringify(info),
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      }
  }

  const googleAddress = await fetch('/address', settings);
  console.log(googleAddress);
};

document.getElementById('buscar').addEventListener('click', createDelivery);