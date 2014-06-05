var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.render('index');
});

router.get('/phone-list', function(req, res) {
	res.render('templates/phone-list');
});

router.get('/phone-detail', function(req, res) {
	res.render('templates/phone-detail');
});
module.exports = router;
