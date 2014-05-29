var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.render('index');
});

router.get('/phonenum-list', function(req, res) {
	res.render('data/phonenum-list.json');
});

module.exports = router;
