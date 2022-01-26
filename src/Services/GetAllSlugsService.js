const slugSchema = require('../database/Schemas/slugSchema')//Compile into a model

class GetAllSlugsService{
    async execute(){
        try{
            slugSchema.find({}).then(function (DBData){//Make a query for all slugs
                console.log(DBData);
                return DBData;//Return the data
            }).catch((err)=>{
                console.log("[ERROR] While compiling all slugs to show\n - " + err);
            })
        }catch(err){
            console.log("[ERROR]: Error trying to get all the slugs from DB.\n - " + err);
            return err;//Return the error
        }

    }
}

module.exports = GetAllSlugsService;