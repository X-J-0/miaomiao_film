var express = require('express');
var adminController = require('../controllers/admin.js');
var router = express.Router();

/* GET users listing. */
router.get('/', adminController.index);

router.post('/login',usersController.login);
router.post('/register',usersController.register);
router.get('/verify',usersController.verify);
router.get('/logout',usersController.logout);
router.get('/getUser',usersController.getUser);
router.post('/findPassword',usersController.findPassword);


module.exports = router;