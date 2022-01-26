var express = require("express");
var ejs = require("ejs");

var router = express.Router();

var CreateShorttyController = require('./Controllers/CreateShorttyController');
var RedirectToPageController = require('./Controllers/RedirectToPageController');
var GetInfoController = require('./Controllers/GetInfoController');
var GetAllSlugsController = require('./Controllers/GetAllSlugsController');
var RemoveSlugController = require('./Controllers/RemoveSlugController');
var HomeController = require("./Controllers/HomeController")

var createShorttyController = new CreateShorttyController();
var redirectToPageController = new RedirectToPageController();
var getInfoController = new GetInfoController();
var getAllSlugsController = new GetAllSlugsController();
var removeSlugController = new RemoveSlugController();
var homeController = new HomeController();


router.get('/:code', redirectToPageController.handle)
router.get('/info/all', getAllSlugsController.handle)
router.get('/info/url', getInfoController.handle)
router.get('/', homeController.handle)

router.post('/createShortty', createShorttyController.handle);

router.delete('/delete', removeSlugController.handle)

module.exports = router;