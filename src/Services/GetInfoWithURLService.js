const slugSchema = require('../database/Schemas/slugSchema')//Compile into a model

class GetInfoWithURLService{
    async execute(urlInfo){
        try{
            var urlDB = slugSchema.findOne({ url : urlInfo });

            if(urlDB == ""){
                return false;
            }else{
                return urlDB;
            }
        }catch(err){
            console.log("[ERROR] While trying to get the url from the DB\n - : " + err);
            return err;
        }
    }
}

module.exports = GetInfoWithURLService;