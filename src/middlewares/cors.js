const cors = (_req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', ['http://localhost:4200']);
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );
  next();
};

module.exports = cors;
