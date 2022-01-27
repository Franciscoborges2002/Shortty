var RemoveSlugService = require('../Services/RemoveSlugService');

var removeSlugService = new RemoveSlugService()

class RemoveSlugController{
    async handle(req, res){
        var slug = req.body.slug;

        try{
            removeSlugService.execute(slug).then(
                (result)=>{
                    if(result){
                        res.status(200).json({message: `${result}`})
                    }else{
                        res.status(400).json({message: 'Não existe o slug especificado'})
                    }
                
            });
        }catch(err){
            console.log("[ERROR] " + err)
            res.json({message: "erro"})
        }
    }
}

module.exports = RemoveSlugController;