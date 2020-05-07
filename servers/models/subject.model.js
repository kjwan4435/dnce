const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const subjectSchema = new Schema(
  {
    name: {
      type: String,
      required: "Text is required",
    },
    age: {
      type: Number,
      required: "Type your age",
    },
    sex: {
      type: String,
      required: "Choose your sex",
    },
    education: {
      type: String,
      required: "Choose your education",
    },
  },
  { timestamps: true }
);

const subject = mongoose.model("subject", subjectSchema);
module.exports = subject;
