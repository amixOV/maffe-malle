var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/', function(req, res, next) {
  const users = {'name': 'amir', 'age': 31}
  res.send(users);
});

module.exports = router;
