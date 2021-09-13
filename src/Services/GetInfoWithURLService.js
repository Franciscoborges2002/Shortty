const slugSchema = require('../Schemas/slugSchema')//Compile into a model

class GetInfoWithURLService{
    async execute(urlInfo){
        try{
            var urlDB = slugSchema.findOne({ url : urlInfo })

            if(urlDB == ""){
                return false
            }else{
                return urlDB;
            }
        }catch(err){
            console.log("[ERROR WHILE TRYING TO GET URL FROM DB {GetInfoURL}]: " + err);
            return err;
        }
    }
}

module.exports = GetInfoWithURLService;