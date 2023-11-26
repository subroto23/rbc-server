const createHttpError = require("http-errors");
const NewsModel = require("../../Modele/NewsModel/NewsModel");
const { handleSuccess } = require("../../Services/SuccessError");

const newsPostController = async (req, res, next) => {
  try {
    const { title, details, createdBy, image } = req.body;
    // let image = await req.file;
    // //
    // if (image) {
    //   image = await image.buffer.toString("base64");
    // }
    const bodyCreateValue = {
      title,
      details,
      createdBy,
      image,
    };

    const publishNews = await NewsModel.create(bodyCreateValue);
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
