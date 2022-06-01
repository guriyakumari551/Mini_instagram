const express=require("express");
const app=express();
const PORT=5000;
require('./model/user')
const mongoose=require("mongoose");
const {MONGOURI}=require('./keys');
mongoose.connect(MONGOURI);
mongoose.connection.on("connected",()=>
{
    console.log("mongoose is sucessfully connected yeah");
})
mongoose.connection.on("error",(er)=>
{
    console.log("error is showing",er);
})
// middleware();
// const coustomMiddleware =(req,res,next)=>
// {
//     console.log("middleware executed successfully");
//     next();
// }
// app.use(coustomMiddleware);
// app.get('/',(req,res)=>
// {

//     res.send("hello world");
// })
app.listen(PORT,()=>
{
    console.log("server is running",PORT);
})
