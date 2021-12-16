const express = require("express");

const Cart = require("../models/cart.model");

const router = express.Router();

router.post("",async(req,res)=>{
    try{
        const cart = await Cart.create(req.body);

        res.status(201).json({cart});
    }catch(e){
        res.status(500).json({Message : e.message , Staus : "Failed"});
    }
});

router.get("",async(req,res)=>{
    try{
        const cart = await Cart.find({},{product : 1}).populate("product").lean().exec();

        res.status(201).json({cart});
    }catch(e){
        res.status(500).json({Message : e.message , Staus : "Failed"});
    }
});

router.get("/:category",async(req,res)=>{
    try{
        const cart = await Cart.find({category : req.params.category}).lean().exec();

        res.status(201).json({cart});
    }catch(e){
        res.status(500).json({Message : e.message , Staus : "Failed"});
    }
});

router.delete("/:id",async(req,res)=>{
    try{
        const cart = await Cart.findByIdAndDelete(req.params.id).lean().exec();

        res.status(201).json({cart});
    }catch(e){
        res.status(500).json({Message : e.message , Staus : "Failed"});
    }
});


module.exports = router;