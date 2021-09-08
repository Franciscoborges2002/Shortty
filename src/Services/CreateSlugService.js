const Db = require('../Db');
const db = new Db();

class CreateSlugService{
    async execute(url){
        var createdSlug = await createSlug(6);
        await db.exec();

        var slugtest = "ayrt25";//temos de fazer uma query na bd com o slug que geramos, se houver uma igual fazemos o while
        var urltest = "http://google.com"//tesmos de fazer uma query na bd

        var slug = await db.findOneByUrl(url).catch(function(err){console.log(err)})
        return slug;

        /*if(url == urltest){   check if there is the same url in the db
            console.log('equal')
        }*/

        while(slug == slugtest){
            slug = await createSlug(6);
            console.log("slugtest: " + slugtest);
            console.log("slug: " + slug);
        }

        return createdSlug;
    }
}

function createSlug(length){
    var possibilities = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var res = "";

    for(i = 0; i < length; i++){
        var random = Math.floor(Math.random() * 62);
        var char = possibilities.charAt(random);
        res = res + char;
    } 

    return res;
}

module.exports = CreateSlugService;