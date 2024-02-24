const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const login = async (req) => {
  const user = await User.findByCredentials(req.body.email, req.body.password);

  const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
    expiresIn: 3600 * 24,
  });

  return { token, user };
};

module.exports = {
  login,
};
