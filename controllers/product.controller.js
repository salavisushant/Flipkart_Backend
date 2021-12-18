const express = require("express");

const Product = require("../models/product.model");

const router = express.Router();

router.post("",async(req,res)=>{
    try{
        const products = await Product.create(req.body);

        res.status(201).json({products});
    }catch(e){
        res.status(500).json({Message : e.message , Staus : "Failed"});
    }
});

router.get("",async(req,res)=>{
    try{
        const products = await Product.find({},{"name" : 1}).lean().exec();

        res.status(201).json({products});
    }catch(e){
        res.status(500).json({Message : e.message , Staus : "Failed"});
    }
});

router.get("/category/:category",async(req,res)=>{
    try{
        const products = await Product.find({category : req.params.category}).limit(30).lean().exec();

        res.status(201).json({products});
    }catch(e){
        res.status(500).json({Message : e.message , Staus : "Failed"});
    }
});

router.get("/:id",async(req,res)=>{
    try{
        const products = await Product.findById(req.params.id).lean().exec();

        res.status(201).json({products});
    }catch(e){
        res.status(500).json({Message : e.message , Staus : "Failed"});
    }
});

module.exports = router;