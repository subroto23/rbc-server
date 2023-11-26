const NewsModel = require("../../Modele/NewsModel/NewsModel");
const { handleSuccess } = require("../../Services/SuccessError");
const FindById = require("../../helper/FindDataById");

const newsUpdateController = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { title, details, image } = req.body;
    const isData = await FindById(NewsModel, id);
    if (!isData) {
      throw createHttpError("আইডি পাওয়া যায় নি");
    }
    const filter = isData;
    const update = { $set: { title, details, image } };
    const options = { new: true };
    const Updated = await NewsModel.findByIdAndUpdate(filter, update, options);
    return handleSuccess(res, {
      statusCode: 201,
      message: "আপডেট করা হয়েছে",
      payload: { Updated },
    });
  } catch (error) {
    next(error);
  }
};
module.exports = newsUpdateController;
