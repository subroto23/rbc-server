const createHttpError = require("http-errors");
const Cada = require("../../Modele/Cada/CadaModel");

const CadaUpdateController = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id) {
      throw createHttpError("আইডি পাওয়া যায় নি");
    }
    const filter = {new id:new Object_id(id)}
    const updateValue = req.body;
    const options = { new: true };
    const update = await Cada.findByIdAndUpdate()
  } catch (error) {
    next(error);
  }
};
module.exports = CadaUpdateController;
