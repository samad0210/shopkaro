const mongoose  = require("mongoose")

const TestimonialSchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true,"Testimonial Name is Required"],
    
  },

  message:{
    type:String,
    required:[true,"Testimonial Message is Required"],
   
  },

  pic:{
    type:String,
    required:[true,"Testimonial Pic is Required"],
    
  },

  active:{
    type:Boolean,
    default:true
    
  }
})

const Testimonial = new mongoose.model("Testimonial",TestimonialSchema)

module.exports = Testimonial