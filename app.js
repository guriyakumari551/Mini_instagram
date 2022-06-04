const express = require('express')
const app = express()
const mongoose  = require('mongoose')
const PORT = process.env.PORT || 5000
const {MONGOURI} = require('./keys')
require('./model/user')
app.use(express.json())
app.use(require("./routes/auth"))



mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology: true

})
mongoose.connection.on('connected',()=>{
    console.log("your project is successfully connected to the database mongodb")
})
mongoose.connection.on('error',(err)=>{
    console.log("your project is not connected to the databases",err)
})





app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})
