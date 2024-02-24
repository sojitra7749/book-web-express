const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
const { messages } = require('../config/messages');

const authenticateToken = (req, _res, next) => {
  // Extract the bearer token from the Authorization header
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    throw Object.assign(new Error(messages.auth.unauthorized), {
      status: StatusCodes.UNAUTHORIZED,
    });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      throw Object.assign(new Error(messages.auth.unauthorized), {
        status: StatusCodes.UNAUTHORIZED,
      });
    }
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
