const createHttpError = require("http-errors");
const NewsModel = require("../../Modele/NewsModel/NewsModel");
const { handleSuccess } = require("../../Services/SuccessError");

const newsIdBasedController = async (req, res, next) => {
  try {
    const id = req.params.id;
    const newsDetails = await NewsModel.findById({ _id: id });
    if (!newsDetails) {
      throw createHttpError("নিউজটি খুজে পাওয়া যায় নি");
    }
    return handleSuccess(res, {
      statusCode: 201,
      message: "নিউজটি সফলভাবে পাওয়া গিয়েছে",
      payload: { newsDetails },
    });
  } catch (error) {
    next(error);
  }
};
module.exports = newsIdBasedController;
