var CreateShorttyService = require('../Services/CreateShorttyService');


class CreateSlugController{
    async handle(req, res){
        var url = req.body.url
        if(url.startsWith("https://") || url.startsWith("http://") || url.startsWith("www.")){
            console.log("URL validation: passed")
        }else{
            console.log("URL validation: failed")
            return res.json({error: "There is an erro in the url"})
        }

        try{
            const createShorttyService = new CreateShorttyService();
            const slug = await createShorttyService.execute(url);

            console.log("slug to retreive: " + slug);

            return res.json(`localhost:5555/${slug}`);
        }catch(err){
            res.status(500).json({error: "An error occured in the server. " + err});
        }
    }
}


module.exports = CreateSlugController