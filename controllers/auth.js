/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const randomstring = require('randomstring');

const {
  validateLogin,
} = require('../middleware/validation');
const {
  validateEmail,
  validateUserPassword,
  validatePhone,
  hashPassword,
  updateLoginCount,
} = require('../components/authComponent');
const {
  saveBusiness,
} = require('../components/businessComponent');
const {
  saveLog,
} = require('../components/logComponent');
const {
  sendMessage,
} = require('../components/messageComponent');
const { loginMail } = require('../templates/login');

// Token Secret
const TOKENSECRET = process.env.TOKEN_SECRET;

// user login
exports.login = async (req, res) => {
  // Validate form
  const { error } = validateLogin(req.body);
  if (error) return res.status(400).json({ status: 'error', message: error.details[0].message });

  // Check if user exist
  const user = await validateEmail(req.body);
  if (!user) {
    return res.status(400).json({
      status: 'error',
      message: 'Invalid credentials',
    });
  }

  //   Check Password
  const validPassword = await validateUserPassword(req.body.password, user.password);
  if (!validPassword) {
    // Add Log
    const action = 'Someone tried to gain access to your account but failed - Wrong Password';
    const logData = {
      status: 'error',
      user: user._id,
      action,
    };
    await saveLog(logData);
    return res.status(400).json({ status: 'error', message: 'Invalid credentials' });
  }

  // Add Log
  const action = `You successfully gained access to your account
  ${useragent.platform}/${useragent.os}
  ${useragent.browser}
  ${useragent.source}`;
  const logData = {
    status: 'success',
    user: user._id,
    action,
  };
  await saveLog(logData);

  // mail
  const link = `${process.env.ENTERPRISELINK}`;
  const to = user.email;
  const from = 'no-reply@platform.com';
  const subject = 'New sign-in to your account';
  const html = await loginMail(link, user.fullname, to, useragent);
  await sendMessage(to, subject, html);

  // Login count, update count
  const loginCount = user.loginCount + 1;
  const updatedUser = await updateLoginCount(user._id, loginCount);

  // Json Web Token
  const token = jwt.sign({ _id: user.id, type: user.type, company: user.company }, TOKENSECRET);
  res.status(200).json({
    status: 'success', message: 'Logged in sucessfully.', token, user: updatedUser,
  });
};

// home
exports.home = async (req, res, next) => {
  res.status(200).json({
    status: 'success',
    message: 'You are here',
  });
};
