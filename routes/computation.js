var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  roundd= Math.round(randm);
  res.send(`Round function applied to ${randm} is : ${roundd}`);
});

module.exports = router;

var randm= Math.random();
var roundd;