const express=require('express')
const router=express.Router()
const {createTask}=require('../controllers/taskControllers')
router.post('/create',createTask)
module.exports=router
