const {Schema,model} = require("mongoose");

const Product = require("./product.model");

const wishlistSchema = new Schema({
    product : {type:Schema.Types.ObjectId,required:true,ref:Product},
    // user_id : {type:Schema.Types.ObjectId,required:true,ref:user},
},{
    versionKey:false,
    timestamps:true,
});

module.exports = new model("wishlist",wishlistSchema)