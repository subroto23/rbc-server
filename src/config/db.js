const mongoose = require("mongoose");
const { mongodbUrl } = require("../secret");

const mongodbDatabaseConnection = async (options = {}) => {
  try {
    await mongoose.connect(mongodbUrl, options);
    console.log("Mongo db Connection successfully");

    mongoose.connection.on("error", (error) =>
      console.error("Mongodb connection Error", error)
    );
  } catch (error) {
    console.error("Mongodb not connected", error);
  }
};

module.exports = mongodbDatabaseConnection;
