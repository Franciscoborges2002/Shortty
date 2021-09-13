var GetInfoWithURLService = require('../Services/GetInfoWithURLService')
var getInfoWithURLService = new GetInfoWithURLService();

class GetInfoController{
    async handle(req, res){
        var url = req.body.url

        try{
            getInfoWithURLService.execute(url).then(
                function(result){
                    if(result){
                        res.status(200).json(result)
                    }else{
                        res.status(404).json({message: "No link found in the db"})
                    }
                },
                function(err){
                    res.status(500).json({error: "An error occured while getting the info. " + err})
                }
            )
        }catch(err){
            console.log('[ERROR WHILE GIVING THE INFO]: ' + err)
        }
    }
}

module.exports = GetInfoController;