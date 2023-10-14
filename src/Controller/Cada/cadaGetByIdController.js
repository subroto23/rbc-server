const createHttpError = require("http-errors");
const Cada = require("../../Modele/Cada/CadaModel");
const { handleSuccess } = require("../../Services/SuccessError");

const cadaGetByIdController = async (req, res, next) => {
  try {
    const id = req.params.id;
    const dataValue = await Cada.findById({ _id: id });
    if (!dataValue) {
      throw createHttpError("তথ্যটি খুজে পাওয়া যাচ্ছে না।");
    }
    return handleSuccess(res, {
      statusCode: 200,
      message: "সফলভাবে তথ্যটি পাওয়া গিয়েছে",
      payload: { dataValue },
    });
  } catch (error) {
    next(error);
  }
};
module.exports = cadaGetByIdController;
