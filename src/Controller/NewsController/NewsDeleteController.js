const NewsModel = require("../../Modele/NewsModel/NewsModel");

const NewsDeleteController = async (req, res, next) => {
  try {
    const id = req.params.id;
    const dataValue = await NewsModel.findById({ _id: id });
    if (!dataValue) {
      throw createHttpError("তথ্যটি খুজে পাওয়া যাচ্ছে না।");
    }
    const deleteValue = await NewsModel.deleteOne({ _id: id });
    return handleSuccess(res, {
      statusCode: 200,
      message: "সফলভাবে তথ্যটি ডিলেট করা হয়েছে",
      payload: { deleteValue },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = NewsDeleteController;
