const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bonusSchema = new Schema(
  {
    sub_id: {
      type: String,
      required: "ID REQUIRED"
    },
    trial1: {
      type: Number,
      required: "TRIAL REQUIRED"
    },
    trial3: {
      type: Number,
      required: "TRIAL REQUIRED"
    },
    bonus1: {
      type: Number,
      required: true
    },
    bonus2: {
      type: Number,
      required: true
    },
    bonus3: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

const bonus = mongoose.model("bonus", bonusSchema);
module.exports = bonus;
