const createHttpError = require("http-errors");
const NewsModel = require("../../Modele/NewsModel/NewsModel");
const { handleSuccess } = require("../../Services/SuccessError");
const newsGetController = async (req, res, next) => {
  try {
    const page = 1;
    const limit = 3;
    const allNews = await NewsModel.find()
      .limit(limit)
      .skip((page - 1) * 3);
    if (!allNews) {
      throw createHttpError("এই মুহুর্তে ডাটাবেজে কোনো নিউজ নেই");
    }

    const count = await NewsModel.find().countDocuments();
    return handleSuccess(res, {
      statusCode: 201,
      message: "All News Successfully returned",
      payload: {
        allNews,
        totalPages: Math.ceil(count / limit),
        currentPage: page,
        previousPage: page - 1 > 0 ? page - 1 : null,
        nextPage: page + 1 <= Math.ceil(count / limit) ? page + 1 : null,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = newsGetController;
