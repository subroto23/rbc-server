const createHttpError = require("http-errors");
const { handleSuccess } = require("../../Services/SuccessError");
const titleModel = require("../../Modele/TitleHeading/TitleModel");

const titleGetController = async (req, res, next) => {
  try {
    const data = await titleModel.find();
    if (!data) {
      throw createHttpError("ডাটা খুজে পাওয়া যায় নি");
    }
    return handleSuccess(res, {
      statusCode: 200,
      message: "সফলভাবে ডাটা পাওয়া গিয়েছে",
      payload: { data },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = titleGetController;
