const createHttpError = require("http-errors");
const userSchemaModel = require("../Modele/UsersModel/UsersModel");
const data = require("../Modele/SheedUser/SheedUser");
const { json } = require("express");

const sheedController = async (req, res, next) => {
  try {
    //Previous storages Delete
    await userSchemaModel.deleteMany({});

    const users = await userSchemaModel.insertMany(data.user);

    return res.status(200).json(users);
  } catch (error) {
    next(createHttpError(501, "Sheed Users Not created at this time"));
  }
};

module.exports = { sheedController };
