const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Full Name is Required"],
  },
  username: {
    type: String,
    required: [true, "Username is Required"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email Address is Required"],
    unique: true,
  },
  phone: {
    type: String,
    required: [true, "Phone Number is Required"],
  },
  password: {
    type: String,
    required: [true, "Password is Required"],
  },
  role: {
    type: String,
    default: "Buyer",
  },
  address: {
    type: String,
    default: "",
  },
  pin: {
    type: String,
    default: "",
  },

  city: {
    type: String,
    default: "",
  },

  state: {
    type: String,
    default: "",
  },

  // otp: {
  //   type: Number,
  
  // },
  otp: {
    type: Number
},
otpExpiry: {
    type: Date
},

  pic: {
    type: String,
    default:""
  },

  active: {
    type: Boolean,
    default: true,
  },
});

const User = new mongoose.model("User", UserSchema);

module.exports = User;
