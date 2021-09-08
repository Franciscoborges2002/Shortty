var express = require("express");

var router = express.Router();

var CreateSlugController = require('./Controllers/CreateSlugController');

const createSlugController = new CreateSlugController();


router.post('/createSlug', createSlugController.handle);

module.exports = router;