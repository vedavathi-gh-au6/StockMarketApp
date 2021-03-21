

var express = require('express');
var { AddStocks } = require('../controllers/allstocks');
var router = express.Router();

router.post("/allStocks", AddStocks);



module.exports = router;