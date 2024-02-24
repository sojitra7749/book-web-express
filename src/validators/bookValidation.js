const Joi = require('joi');

const { ValidationError } = Joi;

const bookSchema = Joi.object({
  name: Joi.string().required().max(250).messages({
    'string.base': 'Name must be a string',
    'string.empty': 'Name is required',
    'string.max': 'Name must not exceed {#limit} characters',
    'any.required': 'Name is required',
  }),
  author: Joi.string().required().max(250).messages({
    'string.base': 'Author must be a string',
    'string.empty': 'Author is required',
    'string.max': 'Author must not exceed {#limit} characters',
    'any.required': 'Author is required',
  }),
  description: Joi.string().required().messages({
    'string.base': 'Description must be a string',
    'string.empty': 'Description is required',
    'any.required': 'Description is required',
  }),
  price: Joi.number().required().messages({
    'number.base': 'Price must be a number',
    'any.required': 'Price is required',
  }),
});

const validateBook = (req, _res, next) => {
  const { error } = bookSchema.validate(req.body);
  if (error) {
    throw new ValidationError(error.details[0].message);
  }
  next();
};

module.exports = validateBook;
