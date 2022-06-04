const express=require("express")
const router=express.Router();
router.get('/',(req,res)=>
{
    res.send("helloworld");
})
router.post('/signup',(req,res)=>
{
   const {name,email,password}=req.body;
   if(!email||!password||!password)
   {
   return res.status(677).json({error:"please add all the feilds"})
   }
   res.json({message:"sucessfully posted"})
})
module.exports=router;