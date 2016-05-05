var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


var config = require("../config/content.json");
router.get('/config', function(req, res, next) {

	console.log(req.headers.host);

	//var portal = request.headers.host;
	
  	res.json(config["1000_user_reviews"]);
});

module.exports = router;
