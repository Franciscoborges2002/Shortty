var express = require('express');
var expressLayouts = require("express-ejs-layouts");
require('dotenv').config();

var db = require('./database/db')
var router = require('./routes');

var app = express();

app.use(express.json());//enable express to read json stuff
app.use(router);//use the routes

app.use(expressLayouts)
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.listen(process.env.PORT, function(){
    console.log(`Server running in port ${process.env.PORT}`);
});