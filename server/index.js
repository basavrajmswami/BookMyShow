const express = require('express');
const dbConfig = require('./dbConfig.js')
const dotEnv = require('dotenv');

dotEnv.config();

const app = express();

dbConfig.connectDb();


app.get('/',(req,res)=>{
    res.send("Hi From Server");
})

app.listen('8001',()=>{
    console.log("Server Started on port 8001");
})