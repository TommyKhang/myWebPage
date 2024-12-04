const express=require('express');
const accessControllers=require('../controllers/accessControllers');
const router=express.Router();

//Sign Up
router.post('/signup',accessControllers.signUp);
module.exports=router;