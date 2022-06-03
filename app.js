const express=require("express")
const app=express()
const PORT=9000

require('./model/user')
// app.use(express.json())
app.use(require('./routes/auth'))
const mongoose=require("mongoose");

mongoose.connect(MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  

    }
)


mongoose.connection.on("connected",()=>
{
    console.log("mongoose is sucessfully connected yeah");
})
mongoose.connection.on("error",(er)=>
{
    console.log("error is showing it means that database is not connected",er);
})
// mongoose.connect('mongodb://127.0.0.1/7000')

// middleware();
// const coustomMiddleware =(req,res,next)=>
// {
//     console.log("middleware executed successfully");
//     next();
// }
// app.use(coustomMiddleware);
app.get('/',(req,res)=>
{

    res.send("hello world");
})
app.listen(PORT,()=>
{
    console.log("server is running",PORT);
})
