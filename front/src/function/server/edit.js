const editDbItem = (id, query, mongooseModule) => {
  const data = JSON.stringify({
    mongooseModule: mongooseModule,
    data: query,
    row: { _id: id },
  });
  console.log(data);
  return fetch(`http://localhost:3001/db`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  })
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log('error : ', error));
};

export default editDbItem;
