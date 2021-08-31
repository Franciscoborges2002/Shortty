class CreateSlugService{
    async execute(url){
        //var slug = await createSlug(6);
        var slug = "ayrt25"
        var urlslug = "IU2P87"

        var slugtest = "ayrt25";//temos de fazer uma query na bd com o slug que geramos, se houver uma igual fazemos o while
        var urltest = "http://google.com"//tesmos de fazer uma query na bd

        if(url == urltest){
            return urlslug;
        }

        while(slug == slugtest){
            slug = await createSlug(6);
            console.log("slugtest: " + slugtest);
            console.log("slug: " + slug);
        }

        return slug;
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