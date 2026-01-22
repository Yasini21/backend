const Task=require('../models/Task')

exports.createTask=async(req,res)=>{
    try{
     const task=await Task.create({
        title:req.body.title,
        description:req.body.description,
        status: req.body.status||'pending',
        user:req.body.id
     })
    res.status(201).json({msg:'task created successfully',task})
    }catch(error){
        res.status(500).send(error);
    }
}
