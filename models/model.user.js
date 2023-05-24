const mongoose = require ('mongoose')
const validator = require ('validator')
const userSchema = new mongoose.Schema (
{ firstName :{
    type : String,
    require :  [true, "Please enter a valid firstName"],
},
lastName :{
    type : String,
    require : [true, "Please enter a valid lastName"],
},
phoneNumber: {
    type: String,
    required: [true, "Please enter a valid phone number"],
  },
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  password: {
    type: String,
    required: true,
    validate(value) {
      if (value.toLowerCase().includes("pass")) {
        throw new Error("Passwords cannot contain 'pass'");
      }
    },
  },

  emailtoken: {
    type: String,
  },

  isVerified: {
    type: String,
    enum: ["true", "false"],
    default: "false",
  },
  date: {
    type: Date,
    default: Date.now(),
  },
},
{
  timestamps: true,
}
);

module.exports = mongoose.model("Customer", userSchema);
