const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
})
module.exports=mongoose.model('Users',userSchema)
//Users ->is where the db create collection in this name







"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5NzA5YmU4Yzc2MDIwYTJlNjA1MDVhZSIsImlhdCI6MTc2OTA1NDU2MywiZXhwIjoxNzY5MTQwOTYzfQ.hFnxAeMF9gsNAFep5Tq0XIdoFSDmIdpsezfAS4PcXQU"