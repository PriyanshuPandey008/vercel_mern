const request=require('http');
const express=require('express');

const mongoose=require('mongoose');
const bodyParser=require('body-parser');

mongoose.connect('mongodb+srv://ppriyanshup2005:TGrNRV4g4QZYarWn@firstmerneval.kh6izda.mongodb.net/?retryWrites=true&w=majority&appName=Firstmerneval')
const app=express();
const getData=(req,res)=>{
  req.get('./home',function(error,response,body){
    if(!error && response.statusCode==200){
      res.send(body);
    }
  })
}
const putData=(req,res)=>{
  req.put('./Post',function(error,response,body){
    if(!error && response.statusCode==200){
      res.send(body);
    }
  })
}


app.listen(3000,(e)=>console.log('server is listning at port http://localHost:3000'));


