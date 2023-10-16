const Cada = require("../../Modele/Cada/CadaModel");

const cadaDeleteById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const dataValue = await Cada.findById({ _id: id });
    if (!dataValue) {
      throw createHttpError("তথ্যটি খুজে পাওয়া যাচ্ছে না।");
    }
    const deleteValue = await Cada.deleteOne({ _id: id });
    return handleSuccess(res, {
      statusCode: 200,
      message: "সফলভাবে তথ্যটি ডিলেট করা হয়েছে",
      payload: { deleteValue },
    });
  } catch (error) {
    next(error);
  }
};
module.exports = cadaDeleteById;
