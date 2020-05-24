var express = require('express');
var adminController = require('../controllers/movie.js');
var router = express.Router();

/* GET users listing. */
router.get('/getinfo', movieController.getInfo);
module.exports = router;