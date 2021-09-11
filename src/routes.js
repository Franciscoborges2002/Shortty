var express = require("express");

var router = express.Router();

var CreateShorttyController = require('./Controllers/CreateShorttyController');
var RedirectToPageController = require('./Controllers/RedirectToPageController')

const createShorttyController = new CreateShorttyController();
const redirectToPageController = new RedirectToPageController();


router.post('/createShortty', createShorttyController.handle);

router.get('/:code', redirectToPageController.handle)

module.exports = router;