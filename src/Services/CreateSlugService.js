const slug = require('../Schemas/slugSchema')//Compile into a model

class CreateSlugService{
    async execute(url){
        //var createdSlug = await createSlug(6);
        var createdSlug = 'oasD23';

        try{
            //var createdSlug = await createSlug(6);
            //1>
            const _url = await slug.findOne({ url });
            if(_url){
                return _url.slug
            }

            //2> Verify if there is some slug identical in db
            var _slug = await slug.findOne({ createdSlug })
            console.log(_slug)
            do{
                var createdSlug = createSlug(6);
                _slug = await slug.findOne({ createdSlug })
            } while(_slug)

            return createdSlug;

            /*while(await findOneBySlug(createdSlug).catch(function(err){console.log(err)}) == false){
                console.log("oioi")
                return "olaaa"
            }

            //3> If passes all the validations, save to the database
            var newUrl = new slug ({
                url: url,
                slug: createdSlug
            })

            newUrl.save(function(err, slug){
                if(err) return console.log(err)
                console.log(slug.url + " saved to database")
            })*/

            return createdSlug;
        }catch(err){
            console.log('[CREATING SHORTTY ERROR]: ' + err);
            return err;
        }
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

async function findOneByUrl(url2Test){
    const query = slug.where({url : `${url2Test}`})
    await query.findOne((err, url) =>{
        if(err) return console.log(err)
        if(url == null){
            return false
        }else {
            return slug
        }
    })
}

async function findOneBySlug(slug2Test){
    const query = slug.where({slug : `${slug2Test}`})
    await query.findOne((err, slug) =>{
        if(err) return console.log(err)
        if(slug){
            console.log("There is one slug identical: " + slug.slug)
            return true;
        }else{
            return false
        }
    })
}

module.exports = CreateSlugService;