const express = require("express");

const User = require("../models/user.model");

const router = express.Router();

const authenticate = require("../middlewares/authenticate");

router.patch("/:id",authenticate,async(req,res)=>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        res.status(201).json(user);
    }catch(e){
        res.status(500).json({Message : e.message , Staus : "Failed"});
    }
});

router.get("/:id",authenticate,async(req,res)=>{
    try{
        const user = await User.findById(req.params.id).lean().exec();
        res.status(201).json(user);
    }catch(e){
        res.status(500).json({Message : e.message , Staus : "Failed"});
    }
});


module.exports = router;