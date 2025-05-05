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

const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); 

router.post('/add-product', async (req, res) => {
  const { name, price, discount, category } = req.body;

  try {
    
    const newProduct = new Product({
      name,
      price,
      discount,
      category,
    });

  
    await newProduct.save();

    res.status(201).json({ message: 'Product added successfully', product: newProduct });
  } catch (error) {
    res.status(500).json({ message: 'Error adding product', error: error.message });
  }
});

module.exports = router;












