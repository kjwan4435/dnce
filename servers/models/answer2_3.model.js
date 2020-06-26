const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const answer2_3Schema = new Schema(
  {
    sub_id: {
      type: String,
      required: "ID REQUIRED"
    },
    trial: {
      type: Number,
      required: "TRIAL REQUIRED"
    },
    partner: {
      type: Number,
      required: "PARTNER REQUIRED"
    },
    partner1: {
      type: Number,
      required: "PARTNER1 REQUIRED"
    },
    partner2: {
      type: Number,
      required: "PARTNER2 REQUIRED"
    },
    time_next: {
      type: Number,
      required: true
    },
    predict: {
      type: Number,
      required: true
    },
    question: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const answer2_3 = mongoose.model("answer2_3", answer2_3Schema);
module.exports = answer2_3;
