var GetAllSlugsService = require('../Services/GetAllSlugsService')

var getAllSlugsService = new GetAllSlugsService();

class GetAllSlugsController{
    async handle(req, res){
        try{
            //console.log(await getAllSlugsService.execute())

            //res.status(200).json(await getAllSlugsService.execute())

            const data = await getAllSlugsService.execute().then((response)=>{
                if(response){
                    res.status(200).json(data)
                }else{
                    res.status(404).json({message: "No links found in the db"})
                }
                console.log("response: "+response)
            },(err)=>{
                console.log("[ERROR] " + err);
                res.status().json({errorMessage: `${err}`})
            })

            console.log("data: " + data)
        }catch(err){
            console.log("[ERROR]: Error trying to get all the slugs from DB.\n - " + err);
            res.send(err);
        }
    }
}

module.exports = GetAllSlugsController;