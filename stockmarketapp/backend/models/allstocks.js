let mongoose = require("mongoose");
let Schema = mongoose.Schema;


const allStocksSchema = mongoose.Schema({
   companyName: {
        type: String
        },
    Symbol: {
        type: String
        },
    marketCap: {
        type: String
    },
    currentPrice: {
        type: String
    },
}, { timestamps: true });
const AllStocks = mongoose.model('AllStocks', allStocksSchema);

module.exports = AllStocks ;