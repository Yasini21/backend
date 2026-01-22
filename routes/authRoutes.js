const express=require('express')
const router=express.Router()
const {register,login} =require('../controllers/authControllers')//{register} since we have used export.register in authcontroller
// and if the authController is module.export then you can use just register without braces
router.post('/register',register)
router.post('/login',login)
module.exports=router 
