class HomeController{
    async handle(req, res){
        res.render("pages/index")
    }
}

module.exports = HomeController