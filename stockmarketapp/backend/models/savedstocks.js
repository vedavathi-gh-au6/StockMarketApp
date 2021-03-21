let mongoose = require("mongoose");
let Schema = mongoose.Schema;


const allsavedStocksSchema = mongoose.Schema({
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
const AllSavedStocks = mongoose.model('AllSavedStocks', allsavedStocksSchema);

module.exports = AllSavedStocks ;