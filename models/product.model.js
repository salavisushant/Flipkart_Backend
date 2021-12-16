const {Schema,model} = require("mongoose");

const productSchema = new Schema({
    "name" : {required:true,type:String},
    "tree" : [{required:true,type:String}],
    "retail_price" : {required:true,type:Number},
    "discount_price" : {required:true,type:Number},
    "image" : [{required:true,type:String}],
    "description" : {required:true,type:String},
    "category" : {required:true,type:String},
    "gender" : {required:false,type:String},
},{
    versionKey:false,
    timestamps:true
});

module.exports = new model("product",productSchema);