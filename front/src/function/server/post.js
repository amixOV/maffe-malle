const sendDataToDb = (dataToSend, mongooseModule) => {
  const data = JSON.stringify({
    mongooseModule: mongooseModule,
    data: dataToSend,
  })

  fetch(`http://localhost:3001/db`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: data,
  })
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
};

export default sendDataToDb;
