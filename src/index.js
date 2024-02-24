require('dotenv').config();
const express = require('express');

const swaggerUi = require('swagger-ui-express');
const bodyParser = require('body-parser');
const responseFormatter = require('./middlewares/responseFormatter');
const errorHandler = require('./middlewares/errorHandler');

const connection = require('./database/connection');

const swaggerFile = require('./swagger-output.json');
const swaggerSetupOptions = require('./config/swagger');

const router = require('./router');

const limiter = require('./middlewares/rateLimit');

const app = express();
connection();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.json());

app.use(responseFormatter);
app.use(limiter);

app.use('/api', router);
app.use(
  '/',
  swaggerUi.serve,
  swaggerUi.setup(swaggerFile, swaggerSetupOptions)
);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(
    `Server is running!\nAPI documentation: http://localhost:${PORT}`
  );
});
