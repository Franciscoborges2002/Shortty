class HomeController{
    async handle(req, res){
        res.render("index")
    }
}

module.exports = HomeController