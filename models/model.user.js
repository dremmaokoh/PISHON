const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },

    emailtoken: {
      type: String,
    },

    isVerified: {
      type: String,
      enum: ["true", "false"],
      default: "false",
    },
    username: { type: String },
    googleId: { type: String },
    thumbnail: { type: String },
    date: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    collection: "User_Information",
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Customer", userSchema);
