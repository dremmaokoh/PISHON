const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema(
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
    message: {
      type: String,
    },

    date: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    collection: "Contact_Us",
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Contact", contactSchema);