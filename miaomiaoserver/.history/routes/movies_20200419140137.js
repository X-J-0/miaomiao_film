var express = require('express');
var moviesController = require('../controllers/movies.js');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });

router.post('/addmovie',moviesController.add);

module.exports = router;