const Customer = require("../models/model.user");

exports.findUserByEmail = async (email) => {
  const user = await Customer.findOne({
    email,
  });
  if (!user) {
    return false;
  }
  return user;
};

exports.findUserByNumber = async (phoneNumber) => {
  const user = await Customer.findOne({
    phoneNumber,
  });
  if (!user) {
    return false;
  }
  return user;
};
