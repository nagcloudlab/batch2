var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.json({ 'info': 'sell-IT api-server' });
});

module.exports = router;
