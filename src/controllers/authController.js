const { messages } = require('../config/messages');
const authService = require('../services/authService');

const login = async (req, res, next) => {
  /*
  #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/loginSchema"
          }
        }
      }
    }
  */
  try {
    const user = await authService.login(req, res);
    res.sendResponse(user, messages.auth.success);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
};
