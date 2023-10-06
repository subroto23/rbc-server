const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcryptjs");
// const { userDefaultsImages } = require("../../secret");

const UsersSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      max: [31, "Your name is too  long"],
      min: [3, "Name is too short"],
    },
    fathername: {
      type: String,
      required: true,
      trim: true,
      max: [31, "Your name is too  long"],
      min: [3, "Name is too short"],
    },
    mothername: {
      type: String,
      required: true,
      trim: true,
      max: [31, "Your name is too  long"],
      min: [3, "Name is too short"],
    },
    dateOfBirth: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      // required: true,
      trim: true,
      unique: true,
      lowercase: true,
      validate: {
        validator: (v) =>
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v),
        message: "Please enter a valid email address",
      },
    },
    phone: {
      type: String,
      trim: true,
      // required: [true, "please enter a valid Phone Number"],
      validate: {
        validator: (v) => /^([01]|\+88)?\d{11}/.test(v),
      },
      password: {
        type: String,
        // required: [true, "Password is required"],
        max: [8, "Your password is too  long"],
        min: [3, "Your password is too short"],
        set: (v) => bcrypt.hashSync(v, bcrypt.genSaltSync(10)),
      },
    },
    image: {
      type: Buffer,
      contentType: String,
      required: [true, "Please User Profile Photo Upload"],
    },
    isMaried: {
      type: Boolean,
      default: false,
    },
    isrbcMember: {
      type: Boolean,
      default: false,
    },
    isVillagers: {
      type: Boolean,
      default: true,
    },
    isjournalist: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isBanned: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const userSchemaModel = mongoose.model("users", UsersSchema);

module.exports = userSchemaModel;
