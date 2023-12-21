const express=require('express');
const router=express.Router();


const {createUser}=require('../controllers/createUser');
const {getUser}=require('../controllers/getUser');

router.post('/adduser',createUser);
router.get('/getuser/:id',getUser);

module.exports=router;