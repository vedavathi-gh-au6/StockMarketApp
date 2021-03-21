

var express = require('express');
var { addStocks, getStocks} = require('../controllers/allstocks');
var router = express.Router();

router.post("/addStocks", addStocks);
router.get("/getStocks",getStocks) ;      




module.exports = router;