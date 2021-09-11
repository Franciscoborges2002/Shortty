var express = require('express');

var db = require('./db')


var router = require('./routes');

var PORT = 5555;

var app = express();

app.use(express.json());//enable express to read json stuff
app.use(router);//use the routes

app.listen(PORT, function(){
    console.log(`Server running in port ${PORT}`);
});