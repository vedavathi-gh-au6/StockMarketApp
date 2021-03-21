var AllStocks = require('../models/allstocks');
 module.exports = {
        async AddStocks(req, res) {
            console.log(req.body)
            try {
                
                await AllStocks.create({ ...req.body });
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
