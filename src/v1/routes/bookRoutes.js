const express = require('express');
const bookController = require('../../controllers/bookController');
const validateBook = require('../../validators/bookValidation');
const validateObjectId = require('../../validators/validateObjectId');
const authenticateToken = require('../../middlewares/authMiddleware');

const router = express.Router();
router.use(authenticateToken);

router.get('/', bookController.getAllBooks);
router.get('/:bookId', validateObjectId('bookId'), bookController.getOneBook);
router.post(
  '/',
  validateBook,
  bookController.createNewBook
  /**
   #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/bookSchema"
                    }  
                }
            }
        }
   */
);
router.patch(
  '/:bookId',
  validateObjectId('bookId'),
  validateBook,
  bookController.updateOneBook
  /**
   #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/bookSchema"
                    }  
                }
            }
        }
   */
);
router.delete(
  '/:bookId',
  validateObjectId('bookId'),
  bookController.deleteOneBook
);

module.exports = router;
