const express=require("express")
const router=express.Router()
const {logoutGet}=require('../controller/logoutController')

router.get('/',logoutGet)

module.exports=router