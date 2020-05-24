var express = require('express');
var adminController = require('../controllers/admin.js');
var router = express.Router();

/* GET users listing. */
router.get('/', adminController.index);


module.exports = router;