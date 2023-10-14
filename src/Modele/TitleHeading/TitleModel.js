const mongoose = require("mongoose");
const { Schema } = mongoose;
const TitleSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, "কি সম্পর্কিত তার নাম লিখুন"],
      unique: true,
    },
  },
  { timestamps: true }
);

const titleModel = mongoose.model("title", TitleSchema);

module.exports = titleModel;
