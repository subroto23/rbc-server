const mongoose = require("mongoose");
const { Schema } = mongoose;
const DueSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "অর্থ প্রদানকারীর নাম লিখুন"],
      unique: true,
    },
    source: {
      type: String,
      trim: true,
      required: [true, "অর্থ প্রদানকারীর নাম লিখুন"],
    },
    fixedTk: {
      type: String,
      trim: true,
      required: [true, "ধার্যকৃত অর্থের পরিমান লিখুন"],
    },
    paidTk: {
      type: String,
      trim: true,
      default: "000",
    },
    due: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const DueModel = mongoose.model("due", DueSchema);

module.exports = DueModel;
