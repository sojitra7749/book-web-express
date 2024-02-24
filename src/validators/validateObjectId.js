const mongoose = require('mongoose');
const { StatusCodes } = require('http-status-codes');

const validateObjectId = (idName) => (req, _res, next) => {
  const id = req.params[idName];

  if (!mongoose.isValidObjectId(id)) {
    throw Object.assign(new Error(`Invalid ${idName}`), {
      status: StatusCodes.BAD_REQUEST,
    });
  }

  next();
};

module.exports = validateObjectId;
