var express = require('express');
var cinemasController = require('../controllers/cinemas.js');
var router = express.Router();

/* GET users listing. */
router.get('/getinfo', cinemasController.getInfo);
module.exports = router;