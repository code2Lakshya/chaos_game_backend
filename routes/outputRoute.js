const express=require('express');
const router=express.Router();

const {createTheme}=require('../controllers/createTheme');
const {addThemeOptions}=require('../controllers/addThemeOptions');
const {addUrl}=require('../controllers/addUrl');
const {increaseRetry}=require('../controllers/increaseRetryCounter');

router.post('/addtheme',createTheme);
router.put('/addoptions',addThemeOptions);
router.put('/addurl',addUrl);
router.put('/increaseretry',increaseRetry);


module.exports=router;