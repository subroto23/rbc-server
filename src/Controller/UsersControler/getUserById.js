const createHttpError = require("http-errors");
const { handleSuccess } = require("../../Services/SuccessError");
const FindById = require("../../helper/FindDataById");
const userSchemaModel = require("../../Modele/UsersModel/UsersModel");

const getUserById = async (req, res, next) => {
  try {
    const id = req.params.id;

    //Function  Call get Data By ID
    const user = await FindById(userSchemaModel, id);

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
