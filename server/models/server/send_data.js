const mongoose = require('mongoose');

insertToDB = (data, page) => {
  if (process.env.NODE_ENV !== 'production') {
    //const dotenv = require('dotenv').config();
    // dbURL = process.env.DATABASE_URL_LOCAL;
    dbURL = process.env.DATABASE_URL;
  } else {
    dbURL = process.env.DATABASE_URL;
  }
  mongoose.connect(dbURL, { useNewUrlParser: true });
  let module = '';
  if (page === 'customer') {
    module = require('../mongoose_model/customer_module.js');
  }
  if (page === 'product_item') {
    module = require('../mongoose_model/product_module.js');
  }
  if (page === 'register') {
    module = require('../mongoose_model/customer_module.js');
  }

  // let newpro = new module( data );
  // newpro.save( ( err, module ) => {
  //   if (err){
  //     mongoose.connection.close();
  //     rej( err );
  //   }
  //     mongoose.connection.close();
  //     res( module ) ;
  // });
  return new Promise((resolve, reject) => {
    module
      .save(data)
      .then((data) => {
        console.log('----connect to : ' + dbURL);
        console.log('----from page : ' + page);
        console.log('save data to db ' + data);
        resolve('save data to db ' + data);
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
module.exports = insertToDB;
