const express=require("express")
const router=express.Router();
const mongoose=require("mongoose")
const User=mongoose.model("User")
const bcrypt=require('bcryptjs')


router.get('/',(req,res)=>
{
    res.send("helloworld");
})

router.post('/signup',(req,res)=>{
    const {name,email,password,pic} = req.body 
    if(!email || !password || !name){
       return res.status(422).json({error:"please add all the fields"})
    }
    User.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
          return res.status(422).json({error:"user already exists with that email"})
        }
      
        bcrypt.hash(password,12)
      .then(hashedpassword=>{
            const user = new User({
                email,
                password:hashedpassword,
                name,
                
            })
       
     
      
              user.save()
              .then(user=>{
                  // transporter.sendMail({
                  //     to:user.email,
                  //     from:"no-reply@insta.com",
                  //     subject:"signup success",
                  //     html:"<h1>welcome to instagram</h1>"
                  // })
                  res.json({message:"saved successfully"})
              })
              .catch(err=>{
                  console.log(err)
              })
        })
        .catch(err=>
            {
                console.log(err)
            })
       
    })
})
router.post('/signin',(req,res)=>
{
 const{email,password}=req.body
 if(!email||!password)
 {
 res.status(555).json({error:"please add email and password then proceeded"})
 }
 User.findOne({email:email})
 .then(savedUser=>
    {
        if(!savedUser)
        {
            res.status(566).json({error:"INValid email or password"})
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>
            {
                if(doMatch)
                {
                    res.json({message:"successfully signed in"})
                }
                else{
                    return res.status(422).json({error:"Invalid Email or password"})
                }
            })
            .catch(err=>
                {
                    console.log(err)
                })
    })
})

module.exports=router