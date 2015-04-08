var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'hello websockets' });
});

router.get('/network', function(req, res, next) {
	res.render('network', { title: 'hello webrtc' });
});

module.exports = router;
