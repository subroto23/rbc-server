const createHttpError = require("http-errors");
const Cada = require("../../Modele/Cada/CadaModel");
const { handleSuccess } = require("../../Services/SuccessError");

const cadaPostController = async (req, res, next) => {
  try {
    const { name, fixedTk, paidTk } = req.body;
    const bodyDatas = {
      name,
      fixedTk,
      paidTk,
    };
    const postData = await Cada.create(bodyDatas);
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
module.exports = cadaPostController;
