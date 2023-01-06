var express = require('express');
const adminController = require('../controller/adminController');
var router = express.Router(); 



router.get('/',adminController.getUsers)
router.put('/:id',adminController.userDetailsChange)
router.delete('/:id',adminController.deleteUser)
router.post('/login',adminController.login)



module.exports = router ;
