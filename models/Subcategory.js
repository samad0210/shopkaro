const mongoose  = require("mongoose")

const SubcategorySchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true,"Subcategory Name is Required"],
    unique:true
  },

  pic:{
    type:String,
    required:[true,"Subcategory Pic is Required"],
    
  },

  active:{
    type:Boolean,
    default:true
    
  }
})

const Subcategory = new mongoose.model("Subcategory",SubcategorySchema)

module.exports = Subcategory