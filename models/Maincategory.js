const mongoose  = require("mongoose")

const MaincategorySchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true,"Maincategory Name is Required"],
    unique:true
  },

  pic:{
    type:String,
    required:[true,"Maincategory Pic is Required"],
    
  },

  active:{
    type:Boolean,
    default:true
    
  }
})

const Maincategory = new mongoose.model("Maincategory",MaincategorySchema)

module.exports = Maincategory