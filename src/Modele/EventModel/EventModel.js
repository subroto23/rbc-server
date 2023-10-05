const mongoose = require("mongoose");
const { Schema } = mongoose;
const Events = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, "উৎসবের নাম অবশ্যই লিখতে হবে"],
    },
    subtitle: {
      type: String,
      trim: true,
    },
    about: { type: String, trim: true },
    date: {
      type: String,
      trim: true,
      required: [true, "উৎসবের তারিখ অবশ্যই দিতে হবে"],
    },
    image: {
      type: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

const EventsModel = mongoose.model("events", Events);

module.exports = EventsModel;
