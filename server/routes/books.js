const router = require('express').Router();
const Book =require('../models/Book');
const auth=require('../middleware/auth');

//get all books
router.get('/',auth,async(req,res)=>{
    res.json(await Book.find());
});

//borrow a book
router.post('/borrow/:id',auth,async(req,res)=>{
    await Book.findByIdAndUpdate(req.params.id,{
        status:borrowed,
        borrowedBy:req.user.id
    });
    res.json({message:'book borrowed successfully'});

})

////return a book
router.post('return/:id',auth,async(req,res)=>{
    await Book.findByIdAndUpdate(req.params.id,{
        status:available,
        borrowedBy:""
    });
    res.json({message:'book returned successfully'});
});

module.exports=router;