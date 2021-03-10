var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tomisin\'s deployment of a Nodejs App on Heroku with Jenkins' });
});

module.exports = router;
