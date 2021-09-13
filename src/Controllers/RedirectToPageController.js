const slugSchema = require("../database/Schemas/slugSchema");
const AddViewsToPageService = require("../Services/AddViewsToPageService");

const addViewsToPageService = new AddViewsToPageService();

class RedirectToPageController{
    async handle(req, res){

        try{
            const slug = await slugSchema.findOne({ slug: req.params.code })

            if(slug){
                addViewsToPageService.execute(slug.slug);
                res.redirect(slug.url)
            }else {
                res.status(404).json({errorMessage: 'No such shortty'})
            }
        } catch(err){
            console.log('[REDIRECTING ERROR]: ' + err)
            res.status(500).json({errorMessage: 'An error occured with the server. Try again later'});
        }
    }
}

module.exports = RedirectToPageController