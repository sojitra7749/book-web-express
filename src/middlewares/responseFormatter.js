const responseFormatter = (_req, res, next) => {
  res.sendResponse = (data, message = 'Success', statusCode = 200) => {
    res.status(statusCode).json({
      success: true,
      message,
      data,
    });
  };

  next();
};

module.exports = responseFormatter;
