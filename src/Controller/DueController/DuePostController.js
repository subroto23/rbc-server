const createHttpError = require("http-errors");
const { handleSuccess } = require("../../Services/SuccessError");
const DueModel = require("../../Modele/DueModel/DueModel");

const DuePostController = async (req, res, next) => {
  try {
    const { name, fixedTk, paidTk, due } = req.body;
    const bodyDatas = {
      name,
      fixedTk,
      paidTk,
      due,
    };
    const postData = await DueModel.create(bodyDatas);
    if (!postData) {
      throw createHttpError("আপনার চাঁদা তৈরির আবেদনটি ব্যার্থ হয়েছে।");
    }
    return handleSuccess(res, {
      statusCode: 200,
      message: "আবেদনটি সফল হয়েছে",
      payload: {},
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};
module.exports = DuePostController;
