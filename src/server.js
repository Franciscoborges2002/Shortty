var express = require('express');
require('dotenv').config();

var db = require('./db')
var router = require('./routes');

var app = express();

app.use(express.json());//enable express to read json stuff
app.use(router);//use the routes

app.listen(process.env.PORT, function(){
    console.log(`Server running in port ${process.env.PORT}`);
});