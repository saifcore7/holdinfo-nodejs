const express=require(`express`);
const request=require(`request`);
const port=8000;
const app=express();
const path=require('path');
const fs=require('fs');
const { application } = require('express');
app.use(express.static('./static'));
app.get('/telegram',function(req,res){
     return res.sendFile(path.resolve(__dirname,`./telegram.html`));
})
app.get('/static/css/2.320202e0.chunk.css',function(req,res){
    return res.sendFile(path.resolve(__dirname,'./static/css/2.320202e0.chunk.css'));
})
app.get('/static/css/main.25c042fc.chunk.css',function(req,res){
    return res.sendFile(path.resolve(__dirname,'./static/css/main.25c042fc.chunk.css'));
})
app.get('/static/img/HODLINFO.8f78fc06.png',function(req,res){
    return res.sendFile(path.resolve(__dirname,'./static/img/HODLINFO.8f78fc06.png'))
})
app.get('/static/img/telegram.png',function(req,res){
    return res.sendFile(path.resolve(__dirname,'./static/img/telegram.png'))
})

// mongo DB

request({
    url:"https://api.wazirx.com/api/v2/tickers/?_limit=0",
    json:true
},(err,res,req)=>{
    
    
});
app.listen(port,function(err){
    if(err)
    {
        console.log("Error",err);
    }
    else
    {
     console.log("Server running");
    }
});