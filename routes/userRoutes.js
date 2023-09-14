const express = require("express")
const router = express.Router();
const fs = require('fs');
const { addUser,getUser,updateUser,deleteUser } = require('../controller/userController')


router.post('/user/add', addUser);
router.get('/user/get/:id',getUser);
router.put('user/update/:id',updateUser);
router.delete('/user/delete/:id',deleteUser);

module.exports = router;























