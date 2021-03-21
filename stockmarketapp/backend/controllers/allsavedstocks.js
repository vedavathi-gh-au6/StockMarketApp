var AllSavedStocks = require('../models/savedstocks');
module.exports = {
    async getsavedStocks(req, res) {
        console.log(req.body)
            try {
                var result = await AllSavedStocks.find();
                console.log(result)
                res.json(result)
            } catch (error) {
                console.log(error)
                res.status(400).send(error)
    
            }
    },
    async addsavedStocks(req, res) {
        console.log(req.body)
        try {
            
            await AllSavedStocks.create({ ...req.body });
            return res.json({ success: true, message: 'stock added successfully' })
        } catch (error) {
            console.log(error)
            if (error.name === "MongoError") {
                return res.status(400).json({ message: error.message });
            }
            res.status(400).send(error);
        }
    }
}
