var express = require('express');
var router = express.Router(); 

const userController= require('../controller/userController');

router.post('/signup',userController.signUp )
router.post('/signin',userController.signin )


module.exports = router ;