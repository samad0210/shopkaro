const mongoose = require("mongoose");

const CheckoutSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User Id is Required"],
  },

  orderStatus: {
    type: String,
    default:"Order Is Placed"
  },

  paymentMode: {
    type: String,
    default:"COD"
  },

  paymentStatus: {
    type: String,
    default:"pending"
  },

  subtotal: {
    type: Number,
    required: [true, "Subtotal Field Is Required"],
  },

  shipping: {
    type: Number,
    required: [true, "Shipping Field Is Required"],
  },

  total: {
    type: Number,
    required: [true, "Total Field Is Required"],
  },

  rppid: {
    type: String,
    default:""
  },
products:[]

},{timestamps:true});

const Checkout = new mongoose.model("Checkout", CheckoutSchema);

module.exports = Checkout;
