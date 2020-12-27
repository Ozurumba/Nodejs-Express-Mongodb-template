const sgMail = require('@sendgrid/mail');
const dotenv = require('dotenv');

dotenv.config();

sgMail.setApiKey(`${process.env.DB_CONNECT}`);

const bcc = ['dev@platform.com', 'support@platform.com'];

const sendMessage = (to, subject, html) => {
  const data = {
    from: 'Platform <no-reply@platform.com>',
    to,
    bcc,
    subject,
    html,
  };
  sgMail.send(data, (error, body) => {
    if (body) {
      return true;
    }
    return false;
  });
};

module.exports.sendMessage = sendMessage;
