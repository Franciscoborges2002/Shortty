var express = require("express");

var router = express.Router();

var CreateShorttyController = require('./Controllers/CreateShorttyController');
var RedirectToPageController = require('./Controllers/RedirectToPageController');
var GetInfoController = require('./Controllers/GetInfoController');

var createShorttyController = new CreateShorttyController();
var redirectToPageController = new RedirectToPageController();
var getInfoController = new GetInfoController();


router.get('/:code', redirectToPageController.handle)
router.get('/info/url', getInfoController.handle)

router.post('/createShortty', createShorttyController.handle);

module.exports = router;