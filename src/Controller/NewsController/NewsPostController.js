const createHttpError = require("http-errors");
const NewsModel = require("../../Modele/NewsModel/NewsModel");
const { handleSuccess } = require("../../Services/SuccessError");

const newsPostController = async (req, res, next) => {
  try {
    const publishNews = await NewsModel.create(req.body);
    //
    return handleSuccess(res, {
      statusCode: 200,
      message: "নিউজটি সফলভাবে পাবলিশ করা হয়েছে",
      payload: { publishNews },
    });
  } catch (error) {
    next(
      createHttpError(
        "দুঃখিত এই মুহুর্তে নিউজটি পাবলিশ করা সম্ভব হচ্ছে না।আবার চেষ্টা করুন"
      )
    );
  }
};

module.exports = newsPostController;
