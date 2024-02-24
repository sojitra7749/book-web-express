const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });

const doc = {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'Book API',
    description:
      'Create a simple Book Store application where users can see the list of available books, add a new book, edit an existing book details, and delete a book.',
  },
  produces: ['application/json'],
  consumes: ['application/json'],
  servers: [
    {
      url: 'http://localhost:3000/api',
      description: 'Local server',
    },
    {
      url: 'https://book-web-express.vercel.app/api',
      description: 'Vercel URL',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
    schemas: {
      response: {
        success: true,
        message: 'Success',
        data: {},
      },
      error: {
        success: false,
        error: 'Something went wrong',
      },
      loginSchema: {
        email: 'test@test.com',
        password: 'Admin@123',
      },
      bookSchema: {
        name: 'Book 1',
        author: 'Rakesh',
        description: '',
        price: 10,
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
};

const outputFile = './swagger-output.json';
const routes = ['./src/router.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);
