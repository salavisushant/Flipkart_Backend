const express = require("express");

const Wishlist = require("../models/wishlist.model");

const router = express.Router();

const authenticate = require("../middlewares/authenticate")

router.post("",authenticate,async(req,res)=>{
    try{
        const user = req.user;

        const wishlist = await Wishlist.create({
            product : req.body.product,
            user_id : user.user._id,
        });

        res.status(201).json({wishlist});
    }catch(e){
        res.status(500).json({Message : e.message , Staus : "Failed"});
    }
});

router.get("/:id",authenticate,async(req,res)=>{
    try{
        const wishlist = await Wishlist.find({user_id : req.params.id}).populate("product").lean().exec();

        res.status(201).json({wishlist});
    }catch(e){
        res.status(500).json({Message : e.message , Staus : "Failed"});
    }
});

router.delete("/:id",authenticate,async(req,res)=>{
    try{
        const wishlist = await Wishlist.findByIdAndDelete(req.params.id).lean().exec();

        res.status(201).json({wishlist});
    }catch(e){
        res.status(500).json({Message : e.message , Staus : "Failed"});
    }
});


module.exports = router;