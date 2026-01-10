const jwt = require('jsonwebtoken');
const JWT = process.env.JWT_SECRET;
module.exports=(req,res,next)=>{
    const token =req.header.authorization?.split("")[1];
    if(!token){
        return res.status(401).json({msg:"No token"});
    }
    req.user= jwt.verify(token,JWT);
    next();
}