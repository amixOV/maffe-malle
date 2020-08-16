// let newpro = new module( data );
// const update = { banned: true };
// newpro.findOneAndUpdate(data, update, (err) => {
//     if (err){
//         res.json('nope');
//     }
//     else{
//         res.json('yep');
//     }
// });

const mongoose = require('mongoose');

editData = (rowToUpdate, dataToUpdate, mongooseModule) => {
 
  if (process.env.NODE_ENV !== 'production') {
    //const dotenv = require('dotenv').config();
    // dbURL = process.env.DATABASE_URL_LOCAL;
    dbURL = process.env.DATABASE_URL;
  } else {
    dbURL = process.env.DATABASE_URL;
  }
  mongoose.connect(dbURL, { useNewUrlParser: true });
  const module = require(`../mongoose_model/${mongooseModule}.js`);

  // let newData = new module(dataToUpdate);
  return new Promise((resolve, reject) => {
    // Sets `name` and unsets all other properties
    module
      .replaceOne(rowToUpdate, dataToUpdate)
      .then((data) => {
        console.log('----connect to : ' + dbURL);
        console.log('----mongoose module  : ' + mongooseModule);
        console.log('save data to db ' + data);
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
console.log('adfafasfassa');
module.exports = editData;
