const express = require('express');
const authController = require('../../controllers/authController');

const router = express.Router();
router.post(
  '/login',
  authController.login
  /**
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
);

module.exports = router;
