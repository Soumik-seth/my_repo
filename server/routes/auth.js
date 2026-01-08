const router =require('express').Router();
const User =require('../models/User');
const bcrypt = require('bcryptjs');
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
        const token = jwt.sign({id:newUser._id,role:newUser.role},JWT,{expiresIn:'1d'});
        res.status(201).json({token,
            role:newUser.role,
            msg:'Registered successfully'
        });
      
    }

    }catch(err){
        res.status(500).json({message:'server error'});
    }
});
// Login
router.post('/login',async(req,res)=>{
    const {email,password}=req.body;
    try{
     // check if user exits
     const user = await User.findOne({email});
     if(!user){
        return res.status(400).json({message:'user not found'});

     }else{
        //check password
        const isMatch = await bcrypt.compare(password,user.password);
       if(!isMatch){
       return res.status(400).json({message:'invalid credentials'});
       }
       else{
        const token = jwt.sign({id:user._id,role:user.role},
            JWT

        );
        res.status(200).json({token,
            role:user.role,
            msg:'Logged in successfully'
        });
       }
     }
    }catch(err){
        res.status(500).json({message:'server error'});
    }
});
module.exports = router;