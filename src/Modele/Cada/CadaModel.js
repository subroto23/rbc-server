const mongoose = require("mongoose");
const { Schema } = mongoose;
const CadaSchema = new Schema(
  {
    catagory: {
      type: String,
      trim: true,
    },
    name: {
      type: String,
      trim: true,
      required: [true, "অর্থ প্রদানকারীর নাম লিখুন"],
      unique: true,
    },
    fixedTk: {
      type: String,
      trim: true,
      required: [true, "ধার্যকৃত অর্থের পরিমান লিখুন"],
    },
    paidTk: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const Cada = mongoose.model("Cada", CadaSchema);

module.exports = Cada;
