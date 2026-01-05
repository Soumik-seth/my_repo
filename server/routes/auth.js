const router =require('express').Router();
const User =require('../models/User');
const bcrypt =require('bcrypt');
const jwt =require('jsonwebtoken');
const JWT = process.env.JWT_SECRET;

// Reister
router.post('/register',async (req,res)=>{
    const {name,email,password}=req.body;
    try{
        // check if user exists
        const exit = await User.findOne({email});
    if(exit){
        return res.status(400).json({message:'user already exits'});

    }else{
        //salt 
        const salt = await bcrypt.genSalt(10);
        //hash password
        const hash =await bcrypt.hash(password,salt);
        // create user
        const newUser = await User.create({
            name,
            email,
            password:hash

        });
        const token = jwt.sign({id:newUser._id},JWT,{expiresIn:'1d'});
        res.status(201).json({token});
      
    }

    }catch(err){
        res.status(500).json({message:'server error'});
    }
});