var express = require('express');
var router = express.Router();

var { allsavedStocks } = require("../controllers/allsavedstocks");
/* GET all saved stocks  listing. */

router.get('/allsavedStocks', allsavedStocks);

module.exports = router;