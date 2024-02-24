const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { StatusCodes } = require('http-status-codes');
const { messages } = require('../config/messages');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    email: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

UserSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw Object.assign(new Error(messages.auth.invalid), {
      status: StatusCodes.BAD_REQUEST,
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw Object.assign(new Error(messages.auth.invalid), {
      status: StatusCodes.BAD_REQUEST,
    });
  }
  return user;
};

UserSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;

  return userObject;
};

const User = mongoose.model('User', UserSchema);
module.exports = User;
