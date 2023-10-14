const createHttpError = require("http-errors");
const FindById = require("../../helper/FindDataById");
const { handleSuccess } = require("../../Services/SuccessError");
const titleModel = require("../../Modele/TitleHeading/TitleModel");

const titleUpdateController = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { title } = req.body;
    const isData = await FindById(titleModel, id);
    if (!isData) {
      throw createHttpError("আইডি পাওয়া যায় নি");
    }
    const filter = isData;
    const update = { $set: { title } };
    const options = { new: true };
    const Updated = await titleModel.findByIdAndUpdate(filter, update, options);
    return handleSuccess(res, {
      statusCode: 201,
      message: "আপডেট করা হয়েছে",
      payload: { Updated },
    });
  } catch (error) {
    next(error);
  }
};
module.exports = titleUpdateController;
