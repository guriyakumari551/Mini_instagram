const mongoose = require("mongoose");
require('dotenv').config();

//Local offline mongodb database
const LOCAL_DB_URL= `mongodb://localhost:27017/${process.env.DB_NAME}`;

// connecting to online mongodb database
const DB_URL= `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.5vsjo.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(DB_URL,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
}).then(()=>{
    console.log("Database Connection Successful.");
}).catch((error)=>{
    console.log(error);
});


