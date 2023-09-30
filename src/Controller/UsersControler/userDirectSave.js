const createHttpError = require("http-errors");
const { handleSuccess } = require("../../Services/SuccessError");
const userSchemaModel = require("../../Modele/UsersModel/UsersModel");
const userDirectRegistation = async (req, res, next) => {
  try {
    const { name, email, dateOfBirth, password, phone } = req.body;
    console.log(req.body);
    const users = {
      name,
      email,
      dateOfBirth,
      password,
      phone,
    };
    const isExists = await userSchemaModel.exists({ email });

    if (isExists) {
      throw createHttpError(409, "User already exists");
    }
    const newUserData = await userSchemaModel.insertMany(users);
    if (!newUserData) {
      throw createHttpError("User Not created");
    }
    return handleSuccess(res, {
      statusCode: 202,
      message: `Verify Your Requesting process.Please Check Your ${email}`,
      payload: { newUserData },
    });
  } catch (error) {
    next(error.message);
  }
};

module.exports = userDirectRegistation;
