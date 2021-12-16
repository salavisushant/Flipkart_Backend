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
        const products = await Product.find({_id : req.query._id}).lean().exec();

        res.status(201).json({products});
    }catch(e){
        res.status(500).json({Message : e.message , Staus : "Failed"});
    }
});

router.get("",async(req,res)=>{
    try{
        const products = await Product.find().lean().exec();

        res.status(201).json({products});
    }catch(e){
        res.status(500).json({Message : e.message , Staus : "Failed"});
    }
});

router.get("/:category",async(req,res)=>{
    try{
        const products = await Product.find({category : req.params.category}).lean().exec();

        res.status(201).json({products});
    }catch(e){
        res.status(500).json({Message : e.message , Staus : "Failed"});
    }
});

module.exports = router;