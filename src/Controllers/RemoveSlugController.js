var RemoveSlugService = require('../Services/RemoveSlugService');

var removeSlugService = new RemoveSlugService()

class RemoveSlugController{
    async handle(req, res){
        var slug = req.body.slug;

        try{
            removeSlugService.execute(slug).then(
                ()=>{
                console.log("Eliminado")
            });
        }catch(err){
            console.log("[ERROR] " + err)
            res.json({message: "erro"})
        }
    }
}

module.exports = RemoveSlugController;