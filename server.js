const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()
app.use(express.json())

mongoose.connect(process.env.MONGO_URI).then(()=>{console.log("MongoDb connected successfully")}).catch((err)=>{console.log(err)})
app.use('/auth',require('./routes/authRoutes'))
app.use('/task',require('./routes/taskRoutes'))//app.use is a middleware and it is checked first
app.get('/api',(req,res)=>{
    res.send('hi from express');  
})
app.post('/api',(req,res)=>{
    const temp=req.body;
    res.send(temp); 
})

app.listen(4000,()=>{
    console.log('server running on 4000');  
})
