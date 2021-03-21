var express = require('express');
var router = express.Router();

var { getsavedStocks,addsavedStocks } = require("../controllers/allsavedstocks");
/* GET all saved stocks  listing. */

router.get('/getsavedStocks', getsavedStocks);
router.post('/addsavedStocks', addsavedStocks);
module.exports = router;