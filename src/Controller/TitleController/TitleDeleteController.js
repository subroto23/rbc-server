const titleModel = require("../../Modele/TitleHeading/TitleModel");

const titleDeleteController = async (req, res, next) => {
  try {
    const id = req.params.id;
    const dataValue = await titleModel.findById({ _id: id });
    if (!dataValue) {
      throw createHttpError("তথ্যটি খুজে পাওয়া যাচ্ছে না।");
    }
    const deleteValue = await titleModel.deleteOne({ _id: id });
    return handleSuccess(res, {
      statusCode: 200,
      message: "সফলভাবে তথ্যটি ডিলেট করা হয়েছে",
      payload: { deleteValue },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = titleDeleteController;
