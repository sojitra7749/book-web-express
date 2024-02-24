const { ValidationError } = require('joi');

const errorHandler = (err, _req, res, next) => {
  if (err instanceof ValidationError) {
    return res.status(400).json({
      success: false,
      error: err.message,
    });
  }
  res.status(err.status || 500).json({
    success: false,
    error: err.message || 'Internal Server Error',
  });
  return next();
};

module.exports = errorHandler;
