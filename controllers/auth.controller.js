require("dotenv").config();

const User=require("../models/user.model");

const jwt = require('jsonwebtoken');

const newToken=(user)=>{
    return jwt.sign({ user: user }, process.env.JWT_ACCESS_KEY);
}
const register= async (req,res)=>{

    //check if email already exists
    try{


        let user = await User.findOne({email:req.body.email}).lean().exec();

        if(user)
        {

            return res.status(400).json({status:"failed",message:"Please provide a different email address"});
        }

        user= await User.create({
            email : req.body.email,
            password : req.body.password,
            username : req.body.username,
        });

        const token =newToken(user);

        return res.status(201).json({user,token});

     } catch(e){

      return res.status(500).json({status:"failed",message:e.message});

     }
}


const login= async (req,res)=>{

    try{
            
        let user = await User.findOne({email:req.body.email});

        if(!user){

            return res.status(400).json({

                status:"failed",
                messge:"Please provide correct email address and password"
            });

        }

        const match = await user.checkPassword(req.body.password);

        if(!match){

            return res.status(400).json({

                status:"failed",
                messge:"Please provide correct email address and password"
            })
        }

        const token =newToken(user);

        return res.status(201).json({user,token});

    }
    catch(e){        

        return res.status(500).json({status:"failed",message:e.message});
    }   
}

module.exports={register,login};