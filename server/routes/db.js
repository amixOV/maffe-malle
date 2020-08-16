const express = require('express');
const router = express.Router();
const createError = require('http-errors');

router.get('/', async (req, res, next) => {
  const dataFromDB = require('../models/server/get_data.js');
  let mongooseModule = req.body.mongooseModule;
  let query = req.body.query;
  console.log(mongooseModule );
  if (mongooseModule == undefined ) {
    mongooseModule = 'product_module'
    query = {}
  }
  try {
    const data = await dataFromDB(query, mongooseModule); //query all = {}
    res.send(data);
  } catch (error) {
    console.error(error);
    res.send('error');
  }
  //   next()
});

router.post('/', async (req, res, next) => {
  const insertToDB = require('../models/server/send_data.js');
  const mongooseModule = req.body.mongooseModule;
  const data = req.body.data;
  try {
    await insertToDB(data, mongooseModule);
    res.send(`the data ${data} was successfully send`);
    obj
  } catch (error) {
    console.log(error);
    res.send('error');
  }
  //   next();
});
router.delete('/', async (req, res, next) => {
  const deleteData = require('../models/server/delete_data.js');
  const mongooseModule = req.body.mongooseModule;
  const query = req.body.query;
  try {
    await deleteData(query, mongooseModule);
    res.send(`the data was successfully deleted`);
  } catch (error) {
    console.log('\n -----ERROR------from---DB---- \n' + error);
    res.send('error: ' + error);
  }
  //   next();
});
router.put('/', async (req, res, next) => {
  const editData = require('../models/server/edit_data.js');
  const mongooseModule = req.body.mongooseModule;
  const row = req.body.row;
  const data = req.body.data;
  try {
    await editData(row, data, mongooseModule);
    res.send(`the data ${data} with id ${row} was successfully edited`);
  } catch (error) {
    console.log(error);
    res.send('error');
  }
  //   next();
});

router.use(function (req, res, next) {
  next(createError(404));
});

// error handler
router.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = router;
