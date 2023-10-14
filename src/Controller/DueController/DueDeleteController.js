const createHttpError = require("http-errors");
const { handleSuccess } = require("../../Services/SuccessError");
const DueModel = require("../../Modele/DueModel/DueModel");

const DueDeleteController = async (req, res, next) => {
  try {
    const id = req.params.id;
    const dataValue = await DueModel.findById({ _id: id });
    if (!dataValue) {
      throw createHttpError("তথ্যটি খুজে পাওয়া যাচ্ছে না।");
    }
    const deleteValue = await DueModel.deleteOne({ _id: id });
    return handleSuccess(res, {
      statusCode: 200,
      message: "সফলভাবে তথ্যটি ডিলেট করা হয়েছে",
      payload: { deleteValue },
    });
  } catch (error) {
    next(error);
  }
};
module.exports = DueDeleteController;
