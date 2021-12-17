const express = require("express");

const Cart = require("../models/cart.model");

const router = express.Router();

const authenticate = require("../middlewares/authenticate");

router.post("",authenticate,async(req,res)=>{
    try{
        const user = req.user;

        const cart = await Cart.create({
            product : req.body.product,
            user_id : user.user._id,
        });

        res.status(201).json({cart});
    }catch(e){
        res.status(500).json({Message : e.message , Staus : "Failed"});
    }
});

router.get("/:id",authenticate,async(req,res)=>{
    try{
        const cart = await Cart.find({user_id : req.params.id}).populate("product").lean().exec();

        res.status(201).json({cart});
    }catch(e){
        res.status(500).json({Message : e.message , Staus : "Failed"});
    }
});

router.delete("/:id",authenticate,async(req,res)=>{
    try{
        const cart = await Cart.findByIdAndDelete(req.params.id).lean().exec();

        res.status(201).json({cart});
    }catch(e){
        res.status(500).json({Message : e.message , Staus : "Failed"});
    }
});


module.exports = router;