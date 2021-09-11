const slug = require('../Schemas/slugSchema')//Compile into a model

class CreateSlugService{
    async execute(url, slugReceived){
        //var createdSlug = await createSlug(6);
        if(slugReceived === ""){
        var createdSlug = createSlug(6);
        } else {
            createdSlug = slugReceived;
        }

        console.log(createdSlug)

        try{
            //var createdSlug = await createSlug(6);
            //1>Check if the url already is in the db
            const _url = await slug.findOne({ url });
            if(_url){
                return _url.slug
            }

            //2> Verify if there is some slug identical in db.
            var _slug = await slug.findOne({ slug: createdSlug })

            //If there is the slug inside the db
            if(_slug){
                //Enter in a while loop, so if the other slug generated is not duplicates as well.
                do{
                    var createdSlug = createSlug(6);
                    _slug = await slug.findOne({ slug: createdSlug })
                } while(_slug)

                return createdSlug; 
            }

            //3> If passes all the validations, save to the database
            //Creating the object
            var newUrl = new slug ({
                url: url,
                slug: createdSlug
            })

            //Saving in db
            newUrl.save(function(err, slug){
                if(err) return console.log(err)
                console.log(slug.url + " saved to database")
            })

            //return the slug
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

module.exports = CreateSlugService;