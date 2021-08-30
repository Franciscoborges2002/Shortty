var express = require('express');
var CreateSlugService = require('./Services/createSlugService');

var PORT = 5555;

var app = express();

app.use(express.json());

app.get('/', (req, res)=>{
    res.json("oioi");
});

app.post('/createSlug', (req, res) =>{
    var url = req.body.url;

    console.log(url);

    var possibilities = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        var slug = "";

        for(i = 0; i < 6; i++){
            var random = Math.floor(Math.random() * 62);
            var a = possibilities.charAt(random);
            slug = slug + a;
        }

    console.log(slug);
    return res.json(slug);
    
});

app.listen(PORT, function(){
    console.log(`Server running in port ${PORT}`);
});