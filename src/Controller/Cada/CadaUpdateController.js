const createHttpError = require("http-errors");
const Cada = require("../../Modele/Cada/CadaModel");
const FindById = require("../../helper/FindDataById");
const { handleSuccess } = require("../../Services/SuccessError");

const CadaUpdateController = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { catagory, name, fixedTk, paidTk } = req.body;
    const isData = await FindById(Cada, id);
    if (!isData) {
      throw createHttpError("আইডি পাওয়া যায় নি");
    }
    const filter = isData;
    const update = { $set: { catagory, name, fixedTk, paidTk } };
    const options = { new: true };
    const Updated = await Cada.findByIdAndUpdate(filter, update, options);
    return handleSuccess(res, {
      statusCode: 201,
      message: "আপডেট করা হয়েছে",
      payload: { Updated },
    });
  } catch (error) {
    next(error);
  }
};
module.exports = CadaUpdateController;
