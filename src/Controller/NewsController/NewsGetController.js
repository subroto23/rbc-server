const createHttpError = require("http-errors");
const NewsModel = require("../../Modele/NewsModel/NewsModel");
const { handleSuccess } = require("../../Services/SuccessError");
const newsGetController = async (req, res, next) => {
  try {
    const allNews = await NewsModel.find({})
    if (!allNews) {
      throw createHttpError("এই মুহুর্তে ডাটাবেজে কোনো নিউজ নেই");
    }
    return handleSuccess(res, {
      statusCode: 201,
      message: "All News Successfully returned",
      payload: { allNews },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = newsGetController;
