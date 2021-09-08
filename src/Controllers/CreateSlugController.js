var express = require('express');
var CreateSlugService = require('../Services/CreateSlugService');


class CreateSlugController{
    async handle(req, res){
        var url = req.body.url

        const createSlugService = new CreateSlugService();
        const slug = await createSlugService.execute(url);

        console.log("slug to retreive: " + slug);

        return res.json(slug);
    }
}

module.exports = CreateSlugController