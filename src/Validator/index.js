const { validationResult } = require("express-validator");
const createHttpError = require("http-errors");
const { handleError } = require("../Services/SuccessError");

const runValidations = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return handleError(res, {
        statusCode: 422,
        message: errors.array()[0].msg,
      });
    }
    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = runValidations;
