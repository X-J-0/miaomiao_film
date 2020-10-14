var express = require('express');
var cinemasController = require('../controllers/cinema.js');
var router = express.Router();

/* GET users listing. */
router.get('/getinfo', cinemasController.getInfo);
router.post('/getdetail', cinemasController.getDetail);
router.post('/getname',cinemasController.getName);
module.exports = router;