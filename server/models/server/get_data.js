const mongoose = require('mongoose');

dataFromDB = (query, mongooseModule) => {
  let dbURL;
  if (process.env.NODE_ENV !== 'production') {
    //const dotenv = require('dotenv').config();
    // dbURL = process.env.DATABASE_URL_LOCAL;
    dbURL = process.env.DATABASE_URL;
    console.log(dbURL);
  } else {
    dbURL = process.env.DATABASE_URL;
  }

  const module = require(`../mongoose_model/${mongooseModule}.js`);

  mongoose.connect(dbURL, { useNewUrlParser: true });
  // module.find(query, (e, res) => {
  //   console.log(res);
  // });
  // console.log(query);
  //   console.log(results);
  return new Promise((resolve, reject) => {
    module
      .find(query)
      .then((data) => {
        console.log('----connect to : ' + dbURL);
        console.log('----mongoose module : ' + mongooseModule);
        // mongoose.connection.close();
        resolve(data);
      })
      .catch((err) => {
        console.error('====================error : ' + err);
        // mongoose.connection.close();
        reject(err);
      });
  });
};
module.exports = dataFromDB;
