const createHttpError = require("http-errors");
const Cada = require("../../Modele/Cada/CadaModel");
const { handleSuccess } = require("../../Services/SuccessError");

const cadaGetController = async (req, res, next) => {
  try {
    const data = await Cada.find();
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

module.exports = cadaGetController;
