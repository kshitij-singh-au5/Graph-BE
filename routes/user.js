var express = require('express');
var router = express.Router();
var {addUser,getUser,deleteUser,graph} = require("../controller/userController");


router.post('/',addUser)
router.get('/',getUser)
router.delete('/:userId',deleteUser)
router.get('/graph',graph)

module.exports = router;
