const slugSchema = require("../Schemas/slugSchema");

class AddViewsToPageService{
    async execute(slugToRedirect){
        try{
            var views = await slugSchema.findOne({ slug: slugToRedirect });
            console.log(views);
            var newViews = views.views + 1;
            console.log("Views: " + newViews)
            await slugSchema.findOneAndUpdate({ slug: slugToRedirect }, { views: `${newViews}`});
            console.log('View has been updated')
        }catch(err){
            console.log("[ERROR WHILE GETTING THE URL TO ADD A VIEW]:" + err)
        }
    }
}

module.exports = AddViewsToPageService;