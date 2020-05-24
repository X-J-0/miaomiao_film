var express = require('express');
var adminController = require('../controllers/admin.js');
var router = express.Router();

router.use((req,res,next) => {
    if(req.session.username && req.session.admin){
        next();
    }
    else{
        res.send({
            msg:'没有管理权限',
            status:-1
        });
    }
})

/* GET users listing. */
router.get('/', adminController.index);
router.post('/add',adminController.add);
router.post('/remove',adminController.remove);


module.exports = router;