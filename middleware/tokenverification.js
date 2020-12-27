/* eslint-disable consistent-return */
/* eslint-disable func-names */
const jwt = require('jsonwebtoken');

const {
  checkKey,
} = require('../components/devComponent');

// Token Secret
const { TOKEN_SECRET } = process.env;

const enterpriseToken = (req, res, next) => {
  if (req.header('Authorization')) {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) return res.status(401).send({ status: 'error', message: 'Access Denied' });
    try {
      const verified = jwt.verify(token, TOKEN_SECRET);
      req.user = verified;
      if (verified.type !== 'enterprise') {
        return res.status(401).send({ status: 'error', message: 'You are not authorized' });
      }
      next();
    } catch (error) {
      res.status(401).send({ status: 'error', message: 'You are not authorized' });
    }
  } else {
    return res.status(401).send({ status: 'error', message: 'You do not have access to this api' });
  }
};

const enterpriseAuth = (req, res, next) => {
  if (req.header('Authorization')) {
    // verify auth credentials
    const base64Credentials = req.headers.authorization.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');
    // if (!token) return res.status(401).send({ status: 'error', message: 'Access Denied' });
    // try {
    //   const verified = jwt.verify(token, TOKEN_SECRET);
    req.user = { username, password };
    //   if (verified.type !== 'enterprise') {
    //     return res.status(401).send({ status: 'error', message: 'You are not authorized' });
    //   }
    next();
    // } catch (error) {
    //   res.status(401).send({ status: 'error', message: 'You are not authorized' });
    // }
  } else {
    return res.status(401).send({ status: 'error', message: 'You do not have access to this api' });
  }
};

const partnerToken = (req, res, next) => {
  if (req.header('Authorization')) {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) return res.status(401).send({ status: 'error', message: 'Access Denied' });
    try {
      const verified = jwt.verify(token, TOKEN_SECRET);
      req.user = verified;
      if (verified.type !== 'partner') {
        return res.status(401).send({ status: 'error', message: 'You are not authorized' });
      }
      next();
    } catch (error) {
      res.status(401).send({ status: 'error', message: 'You are not authorized' });
    }
  } else {
    return res.status(401).send({ status: 'error', message: 'You do not have access to this api' });
  }
};

const partnerApikey = async (req, res, next) => {
  if (req.headers.key) {
    try {
      const type = req.headers.key.includes('pk_test') ? 'test' : 'live';
      const devUser = await checkKey(req.headers.key);
      const dev = {
        company: devUser.company,
        type,
        email: devUser.email,
      };
      req.user = dev;
      if (devUser == null || !devUser) {
        return res.status(401).send({ status: 'error', message: 'You are not authorized' });
      }
      next();
    } catch (error) {
      res.status(401).send({ status: 'error', message: 'You are not authorized' });
    }
  } else {
    return res.status(401).send({ status: 'error', message: 'You do not have access to this api' });
  }
};

const enterpriseApikey = async (req, res, next) => {
  if (req.headers.key) {
    try {
      const type = req.headers.key.includes('pk_test') ? 'test' : 'live';
      const devUser = await checkKey(req.headers.key);
      const dev = {
        company: devUser.company,
        type,
        email: devUser.email,
      };
      req.user = dev;
      if (devUser == null || !devUser) {
        return res.status(401).send({ status: 'error', message: 'You are not authorized' });
      }
      next();
    } catch (error) {
      res.status(401).send({ status: 'error', message: 'You are not authorized' });
    }
  } else {
    return res.status(401).send({ status: 'error', message: 'You do not have access to this api' });
  }
};

const logisticsToken = (req, res, next) => {
  if (req.header('Authorization')) {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) return res.status(401).send({ status: 'error', message: 'Access Denied' });
    try {
      const verified = jwt.verify(token, TOKEN_SECRET);
      req.user = verified;
      if (verified.type !== 'logistics') {
        return res.status(401).send({ status: 'error', message: 'You are not authorized' });
      }
      next();
    } catch (error) {
      res.status(401).send({ status: 'error', message: 'You are not authorized' });
    }
  } else {
    return res.status(401).send({ status: 'error', message: 'You do not have access to this api' });
  }
};

const fetchToken = (token) => {
  if (token) {
    const verified = jwt.verify(token, TOKEN_SECRET);
    return verified;
  }
  return false;
};


module.exports.enterpriseToken = enterpriseToken;
module.exports.partnerToken = partnerToken;
module.exports.logisticsToken = logisticsToken;
module.exports.partnerApikey = partnerApikey;
module.exports.fetchToken = fetchToken;
module.exports.enterpriseApikey = enterpriseApikey;
module.exports.enterpriseAuth = enterpriseAuth;
