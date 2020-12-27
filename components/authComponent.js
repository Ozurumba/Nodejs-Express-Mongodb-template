/* eslint-disable no-undef */
const bcrypt = require('bcrypt-nodejs');
const User = require('../models/User');

const { dateNow } = require('../middleware/time');

// validate user email
const validateEmail = async (data) => {
  const user = await User.findOne({ email: data.email });
  return user;
};

// fetch user by id
const validateUserbyId = async (id) => {
  const user = await User.findOne({ _id: id });
  return user;
};

// validate user phone
const validatePhone = async (data) => {
  const user = await User.findOne({ phone: data.phone });
  return user;
};

// validate user password
const validateUserPassword = (password, userpassword) => {
  const validPassword = bcrypt.compareSync(password, userpassword);
  return validPassword;
};

// hash password
const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

const updateLoginCount = async (id, count) => {
  const date = await dateNow();
  await User.updateOne(
    { _id: id },
    {
      $set: {
        lastLogin: date,
        loginCount: count,
      },
    },
  );
  const user = this.fetchProfileById(id);
  return user;
};

module.exports.validateEmail = validateEmail;
module.exports.validateUserPassword = validateUserPassword;
module.exports.validatePhone = validatePhone;
module.exports.hashPassword = hashPassword;
module.exports.validateUserbyId = validateUserbyId;
module.exports.updateLoginCount = updateLoginCount;
