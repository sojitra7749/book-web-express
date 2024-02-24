const express = require('express');

const router = express.Router();

const authRouter = require('./v1/routes/authRoutes');
const bookRouter = require('./v1/routes/bookRoutes');

router.use(
  '/v1/auth',
  authRouter
  // #swagger.tags = ['Auth']
);

router.use(
  '/v1/books',
  bookRouter
  /*
   #swagger.tags = ['Books']
   #swagger.security = [{
        "bearerAuth": []
    }]
   */
);

module.exports = router;
