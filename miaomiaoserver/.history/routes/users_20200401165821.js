var express = require('express');
var usersController = require('../controllers/users.js');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login',usersController.login);
router.post('/register',usersController.login);
router.post('/verify',usersController.login);
router.post('/logout',usersController.login);
router.post('/getUser',usersController.login);
router.post('/findPassword',usersController.login);


module.exports = router;
