const createHttpError = require("http-errors");
const FindById = require("../../helper/FindDataById");
const { handleSuccess } = require("../../Services/SuccessError");
const DueModel = require("../../Modele/DueModel/DueModel");

const DueUpdateController = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { paidTk, due } = req.body;
    console.log(paidTk, due, id);
    const isData = await FindById(DueModel, id);
    if (!isData) {
      throw createHttpError("আইডি পাওয়া যায় নি");
    }
    const filter = isData;
    const update = { $set: { paidTk, due } };
    const options = { new: true };
    const Updated = await DueModel.findByIdAndUpdate(filter, update, options);
    return handleSuccess(res, {
      statusCode: 201,
      message: "আপডেট করা হয়েছে",
      payload: { Updated },
    });
  } catch (error) {
    next(error);
  }
};
module.exports = DueUpdateController;
