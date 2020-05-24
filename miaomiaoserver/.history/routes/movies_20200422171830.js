var express = require('express');
var moviesController = require('../controllers/movie.js');
var router = express.Router();

/* GET users listing. */
router.get('/getinfo', moviesController.getInfo);
router.post('/getdetail', moviesController.getdetail);
module.exports = router;