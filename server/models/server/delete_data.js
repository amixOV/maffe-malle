const mongoose = require('mongoose');

deleteData = (query, mongooseModule) => {
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
      .deleteOne(query)
      .then((data) => {
        console.log('----connect to : ' + dbURL);
        console.log('----mongoose module : ' + mongooseModule);
        resolve(data);
      })
      .then(() => {
        // mongoose.connection.close();
        
      } )
      .catch((err) => {
        console.error(' \n ----ERROR-----from-----delete_data---- \n' + err);
        // mongoose.connection.close();
        reject(err);
      });
 
  })
};
module.exports = deleteData;


