const jwt=require('jsonwebtoken')
//In middleware function we use next object with it
exports.protect=(req,res,next)=>{
    const token=req.headers.authorization.split(' ')[1]
    //checking condition for token and to check bearer is there or not we use startwith keyword
    if(!token){
        res.status(401).json({msg:"Not authorized"})
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        req.user=decoded
        next()//this function is used in only middleware
    }catch(error){
        res.send("Invalid token")
    }
}