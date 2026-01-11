const router=require('express').Router();
const Book =require('../models/Book');
const auth=require('../middleware/auth');
router.post('/add',auth, async(req,res)=>{
   if(req.user.role !=='admin') return res.status(400).json({msg:"only admin allowed"});
    await Book.create(req.body);
    res.json("added");

});
 // for delete function
router.post('/:id',auth,async (req,res)=>{
    await Book.findByIdAndDelete(req.params.id);
    res.json({msg:"Delete"});
});


//get all book
router.get('/all',auth,async(req,res)=>{
    res.json(await Book.find());

})

module.exports=router