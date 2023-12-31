const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const userSchemaModel = require("../UsersModel/UsersModel");

const newsSchema = new Schema(
  {
    createdBy: {
      type: String,
      trim: true,
      required: true,
    },
    title: {
      type: String,
      trim: true,
      min: [10, "টাইটেল মিনিমাম 10 টি অক্ষরের হতে হবে"],
      max: [40, "টাইটেল মিনিমাম 40 টি অক্ষরের হতে হবে"],
      unique: true,
      required: [true, "টাইটেল অবশ্যই দিতে হবে"],
    },
    details: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
      trim: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const NewsModel = mongoose.model("News", newsSchema);

module.exports = NewsModel;
