const mongoose = require('mongoose');

dataFromDB = (queryObj, page) => {
  let dbURL;
  let module;
  if (process.env.NODE_ENV !== 'production') {
    //const dotenv = require('dotenv').config();
    // dbURL = process.env.DATABASE_URL_LOCAL;
    dbURL = process.env.DATABASE_URL;
    console.log(dbURL);
  } else {
    dbURL = process.env.DATABASE_URL;
  }

  if (page === 'customer' || page === 'customer_item' || page === 'login') {
    module = require('../mongoose_model/customer_module.js');
  }

  if (page === 'productAdmin' || page === 'product_item') {
    module = require('../mongoose_model/product_module.js');
  }
  mongoose.connect(dbURL, { useNewUrlParser: true });
  // module.find(queryObj, (e, res) => {
  //   console.log(res);
  // });
  // console.log(queryObj);
  //   console.log(results);
  return new Promise((resolve, reject) => {
    module
      .find(queryObj)
      .then((data) => {
        console.log('----connect to : ' + dbURL);
        console.log('----from page : ' + page);
        resolve(data);
      })
      .catch((err) => {
        console.error('====================error : ' + err);
        reject(err);
      });
 
  }).catch((error) => {
    console.error(error);
    reject(error);
  });
};
mongoose.connection.close();
module.exports = dataFromDB;
