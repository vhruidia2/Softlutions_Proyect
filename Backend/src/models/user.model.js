const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema(
  {
    isDev: { type: Boolean, default: false },
    cc: { type: Number, required: true },
    firtsName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
    numberPhone: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, default: "Sin imagen adjunta" },
    range:{type:String, required:true, default: ""}
  },
  {
    versionKey: false,
    timeseries: true
  }
);

module.exports = mongoose.model("user", userSchema);
