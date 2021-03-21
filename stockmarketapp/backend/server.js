var express = require('express');
const cors = require("cors");
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var app =express();


//middlewares
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


require("./models/mongo");
const mongoose = require("mongoose");
const connect = mongoose.connect('mongodb+srv://LibraryUser:LibraryUser@cluster0-ccih7.mongodb.net/StockApp?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));
console.log(connect)
var homeRouter = require('./routes/home');
var viewsRouter = require('./routes/views');

app.use('/home', homeRouter);
app.use('/views', viewsRouter);
/*
app.post("/", (req, res) => {
    console.log("insidepost")
    upload(req, res, err => {
      if(err) {
        return res.json({ success: false, err })
      }
      return res.json({ success: true, url: res.req.file.path });
    })
  });

*/
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server Running at ${port}`);
});