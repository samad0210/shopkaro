const mongoose  = require("mongoose")

const BrandSchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true,"Brandcategory Name is Required"],
    unique:true
  },

  pic:{
    type:String,
    required:[true,"Brandcategory Pic is Required"],
    
  },

  active:{
    type:Boolean,
    default:true
    
  }
})

const Brand = new mongoose.model("Brand",BrandSchema)

module.exports = Brand