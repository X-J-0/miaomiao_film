var express = require('express');
var cinemasController = require('../controllers/cinema.js');
var router = express.Router();

/* GET users listing. */
router.get('/cinemagetinfo', cinemasController.CinemaGetInfo);
router.post('/cinemagetdetail', cinemasController.CinemaGetDetail);
router.post('/cinemagetname',cinemasController.CinemaGetName);
module.exports = router;