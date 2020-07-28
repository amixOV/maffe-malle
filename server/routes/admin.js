const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/*', (req, res, next) => {
    // dataFromDB()
  res.sendFile(path.join(__dirname, '../../front/build/index.html'), (err) => {
    console.log('error is : ' + err);
  });
});

module.exports = router;
