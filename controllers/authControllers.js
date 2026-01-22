const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const User=require('../models/User') 

exports.register=async(req,res)=>{
    const{name,email,password}=req.body
    const existingUser=await User.findOne({email})  
    if(existingUser){
        return res.status(400).send({message:"email already exists"})
    }
    const hashedPassword=await bcrypt.hash(password,10)
    const user =await User.create({
        name,
        email,
        password:hashedPassword
    })
    res.status(201).json({msg:"User created successfully"}) 
}

// res.status(400).json({message:"email already existing"}) if it is .json then it is sended as json format
//res.status(400).send({message:"email already existing"}) if it is .send then it is sended as file
exports.login=async(req,res)=>{
    try{
    const{email,password}=req.body
    const existingUser=await User.findOne({email})
    if(!existingUser){
        res.status(400).send({message:"Invalid login"})
    }
    const isMatching=await bcrypt.compare(password,existingUser.password) 
    if(!isMatching){
        res.status(400).send({message:"Invalid credentials"})
    }
    const token=jwt.sign(
        {id:existingUser._id},
        process.env.JWT_SECRET,
        {expiresIn:"1d"}
    )
    //res.status(400).send({message:"Login successfully"})
    res.json({token})

}
catch(error){
    res.status(500).send(error)
}
}
