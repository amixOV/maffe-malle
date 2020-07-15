const express = require('express');
const path = require('path');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', {
		title: 'AM IXXXXXX',
	});
});
const react = path.join(__dirname, '../build');
router.use(express.static(react));
console.log(react);

router.get('/react', (req, res, next) => {
	//C:/Users/User/amix/maafe-malle/my-app/build/index.html

	res.sendFile(path.join(__dirname, '../build/index.html'), (err) => {
		console.log('error is : ' + err);
	});
});

module.exports = router;
