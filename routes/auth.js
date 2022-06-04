const express=require("express")
const router=express.Router();
const mongoose=require("mongoose")
const User=mongoose.model("User")

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
       
      const  user=new User(
          {
              email,
              password,
              name
          }
      )
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
       
    })

module.exports=router;