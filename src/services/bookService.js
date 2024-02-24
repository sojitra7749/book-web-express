const Book = require('../models/bookModel');

const getAllBooks = async () => {
  const books = await Book.find().sort({ $natural: -1 });
  return books;
};

const getOneBook = async (bookId) => {
  const book = await Book.findById(bookId);
  return book;
};

const createNewBook = async (req) => {
  const book = new Book(req.body);
  await book.save();
  return book;
};

const updateOneBook = async (bookId, req) => {
  const book = await Book.findByIdAndUpdate(bookId, req.body, { new: true });
  return book;
};

const deleteOneBook = async (bookId) => {
  const book = await Book.findByIdAndDelete(bookId);
  return book;
};

module.exports = {
  getAllBooks,
  getOneBook,
  createNewBook,
  updateOneBook,
  deleteOneBook,
};
