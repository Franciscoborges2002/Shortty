var CreateSlugService = require('../Services/CreateSlugService');


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
            const createSlugService = new CreateSlugService();
            const slug = await createSlugService.execute(url);
        }catch(err){
            res.status(500).json({error: "An error occured in the server. " + err});
        }

        console.log("slug to retreive: " + slug);

        return res.json(`localhost:5555/${slug}`);
    }
}


module.exports = CreateSlugController