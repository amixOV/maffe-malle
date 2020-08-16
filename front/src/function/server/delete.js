const deleteFromDB = (id, mongooseModule) => {
  const data = JSON.stringify({
    mongooseModule: mongooseModule,
    query: { _id: id },
  });
console.log(data);

 return fetch(`http://localhost:3001/db`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  })
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error))
}
export default deleteFromDB;
