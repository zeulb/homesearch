var express = require('express');
var router = express.Router();
var homes = require('../models/homes');

router.get('/', function(req, res, next) {
  res.json({ results: homes.getAll() });
});

module.exports = router;
