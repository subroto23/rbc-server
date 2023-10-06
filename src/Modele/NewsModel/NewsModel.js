const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const userSchemaModel = require("../UsersModel/UsersModel");

const newsSchema = new Schema(
  {
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
      unique: true,
      required: [true, "বিস্তারিত অবশ্যই দিতে হবে"],
    },
    image: {
      type: Buffer,
      contentType: String,
      required: [true, "খবরের ছবি থাকতেই হবে"],
    },
    date: {
      type: Date,
      default: Date.now,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  { timestamps: true }
);

const NewsModel = mongoose.model("News", newsSchema);

module.exports = NewsModel;
