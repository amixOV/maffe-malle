const getDataFromDb = (query, mongooseModule) => {
  // const data = JSON.stringify({
  //   mongooseModule: mongooseModule,
  //   query: query,
  // });
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:3001/db`, {
      method: 'GET',
      // headers: {
      // 	'Content-Type': 'application/json'
      // },

      // body: data,
      // headers: {
      // 	'Content-Type': 'application/json'
      // },
      redirect: 'follow',
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        resolve(data);
      })
      .catch((err) => {
        console.error(err);
        reject(`some error --- ${err}`);
      });
  });
};

export default getDataFromDb;
