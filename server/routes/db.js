const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/get', async (req, res, next) => {
  const dataFromDB = require('../models/server/get_data.js');
  const users = await dataFromDB({}, 'product_item');
  console.log(users);
  res.send(users);
  // next()
  //   res.sendFile(path.join(__dirname, '../public/build/index.html'), (err) => {
  //   });
});
router.get('/post/:name', async (req, res, next) => {
  console.log('sdfsffsdfsdfsdfsdf');

  console.log(req.params.name);
  const insertToDB = require('../models/server/send_data.js');
  const users = await insertToDB(req.params.name, 'product_item');
  console.log(users);
  res.send(users);
  // next()
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
