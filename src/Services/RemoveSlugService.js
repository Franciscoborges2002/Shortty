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
                        slugSchema.findByIdAndDelete({slug : slug2Remove},).then((err, doc, res)=>{
                            console.log(doc);
                            console.log(res);
                        })
                    }
        }catch(err){

        }
        
    }

}

module.exports = RemoveSlugService;