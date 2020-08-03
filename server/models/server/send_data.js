const mongoose = require('mongoose');

insertToDB = (data, mongooseModule) => {
  if (process.env.NODE_ENV !== 'production') {
    //const dotenv = require('dotenv').config();
    // dbURL = process.env.DATABASE_URL_LOCAL;
    dbURL = process.env.DATABASE_URL;
  } else {
    dbURL = process.env.DATABASE_URL;
  }
  mongoose.connect(dbURL, { useNewUrlParser: true });
  const module = require(`../mongoose_model/${mongooseModule}.js`);


  let newData = new module(data);
  console.log(data);
  return new Promise((resolve, reject) => {
    newData
      .save(data)
      .then((data) => {
        console.log('----connect to : ' + dbURL);
        console.log('----mongoose module  : ' + mongooseModule);
        console.log('save data to db ' + data);
        mongoose.connection.close();
        resolve(data);
      })
      .catch((err) => {
        mongoose.connection.close();
        reject(err);
      });
  });
};
module.exports = insertToDB;
