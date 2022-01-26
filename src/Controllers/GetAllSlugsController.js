var GetAllSlugsService = require('../Services/GetAllSlugsService')

var getAllSlugsService = new GetAllSlugsService();

class GetAllSlugsController{
    async handle(req, res){
        try{
            console.log(await getAllSlugsService.execute())

            res.status(200).json(await getAllSlugsService.execute())
            
            /*
            then(
                function(data){
                    if(data){
                        res.status(200).json(data)
                    }else{
                        res.status(404).json({message: "No links found in the db"})
                    }
                    console.log(data)
                },
                function(err){
                    res.status(500).json({error: "[ERROR] An error occured while getting the info. " + err})
                }
            )*/
        }catch(err){
            console.log("[ERROR]: Error trying to get all the slugs from DB.\n - " + err);
            res.send(err);
        }
    }
}

module.exports = GetAllSlugsController;