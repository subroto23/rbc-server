const createHttpError = require("http-errors");
const { handleSuccess } = require("../../Services/SuccessError");
const FindById = require("../../helper/FindDataById");
const userSchemaModel = require("../../Modele/UsersModel/UsersModel");

const getUserById = async (req, res, next) => {
  try {
    const email = req.body;

    //Function  Call get Data By ID
    const user = await userSchemaModel.findOne({ email: email });

    return handleSuccess(res, {
      statusCode: 201,
      message: "User Found",
      payload: {
        user,
      },
    });
  } catch (error) {
    next(createHttpError(404, "Id Based user not Found,Internal Error"));
  }
};
module.exports = getUserById;
