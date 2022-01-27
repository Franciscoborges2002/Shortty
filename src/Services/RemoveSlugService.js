const slugSchema = require("../database/Schemas/slugSchema");

//need to finish
class RemoveSlugService{
    async execute(slug2Remove){
        try{
            var slugInDB = slugSchema.findOne({ slug : slug2Remove });

                    if(slugInDB == ""){//There is no slug in the database
                        console.log("Nao existe o slug")
                        return false;
                    }else{//If exists
                        console.log("Existe o slug")

                        slugSchema.findOneAndDelete({slug : slug2Remove}).catch((err)=>{
                            console.log("[ERRO]: " + err)
                            return err;
                        })
                        return true;
                        
                    }
        }catch(err){

        }
        
    }

}

module.exports = RemoveSlugService;