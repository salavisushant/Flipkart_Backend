const express = require("express");

const Wishlist = require("../models/wishlist.model");

const router = express.Router();

router.post("",async(req,res)=>{
    try{
        const wishlist = await Wishlist.create(req.body);

        res.status(201).json({wishlist});
    }catch(e){
        res.status(500).json({Message : e.message , Staus : "Failed"});
    }
});

router.get("",async(req,res)=>{
    try{
        const wishlist = await Wishlist.find({},{product : 1}).populate("product").lean().exec();

        res.status(201).json({wishlist});
    }catch(e){
        res.status(500).json({Message : e.message , Staus : "Failed"});
    }
});

router.delete("/:id",async(req,res)=>{
    try{
        const wishlist = await Wishlist.findByIdAndDelete(req.params.id).lean().exec();

        res.status(201).json({wishlist});
    }catch(e){
        res.status(500).json({Message : e.message , Staus : "Failed"});
    }
});


module.exports = router;