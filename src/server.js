var express = require('express');
var path = require("path");
var expressLayouts = require("express-ejs-layouts");
require('dotenv').config();

var db = require('./database/db')
var router = require('./routes');

var app = express();

app.use(express.json());//enable express to read json stuff
app.use(router);//use the routes
app.use(expressLayouts)//use the express-ejs-layouts, so i have a layout for all pages

//app.set('layout', './views/layout/full-page.ejs')//Instaed of using the default layout, pointing for where the default page is
app.set('views', './src/views');//to express know where the views are
app.set('view engine', 'ejs');//Which type of view engine that app will use

app.use(express.static('public'))
//app.use('/css', express.static(path.join(__dirname, 'public/css')))
app.use('/css', express.static(__dirname + 'src/public/css'))

app.listen(process.env.PORT, function(){
    console.log(`Server running in port ${process.env.PORT}`);
});