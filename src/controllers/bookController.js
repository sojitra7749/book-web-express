const { StatusCodes } = require('http-status-codes');
const { messages } = require('../config/messages');

const bookService = require('../services/bookService');

const getAllBooks = async (req, res, next) => {
  try {
    const books = await bookService.getAllBooks(req);
    res.sendResponse(books);
  } catch (error) {
    next(error);
  }
};

const getOneBook = async (req, res, next) => {
  try {
    const { bookId } = req.params;
    const book = await bookService.getOneBook(bookId);
    if (!book) {
      throw Object.assign(new Error(messages.books.notFound), {
        status: StatusCodes.NOT_FOUND,
      });
    }
    res.sendResponse(book);
  } catch (error) {
    next(error);
  }
};

const createNewBook = async (req, res, next) => {
  /*
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
  try {
    const book = await bookService.createNewBook(req);
    res.sendResponse(book, messages.books.added);
  } catch (error) {
    next(error);
  }
};

const updateOneBook = async (req, res, next) => {
  /*
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
  try {
    const { bookId } = req.params;
    const updatedBook = await bookService.updateOneBook(bookId, req);
    res.sendResponse(updatedBook, messages.books.updated);
  } catch (error) {
    next(error);
  }
};

const deleteOneBook = async (req, res, next) => {
  try {
    const { bookId } = req.params;
    const deletedBook = await bookService.deleteOneBook(bookId);
    res.sendResponse(deletedBook, messages.books.deleted);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllBooks,
  getOneBook,
  createNewBook,
  updateOneBook,
  deleteOneBook,
};
