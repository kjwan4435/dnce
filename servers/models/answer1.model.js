const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const answer1Schema = new Schema(
  {
    sub_id: {
      type: String,
      required: "ID REQUIRED"
    },
    trial: {
      type: Number,
      required: "TRIAL REQUIRED"
    },
    l_num: {
      type: Number,
      required: "LEFT NUMBER REQUIRED"
    },
    l_prob: {
      type: Number,
      required: "LEFT PROB REQUIRED"
    },
    r_num: {
      type: Number,
      required: "RIGHT NUMBER REQUIRED"
    },
    r_prob: {
      type: Number,
      required: "RIGHT PROB REQUIRED"
    },
    l_click: {
      type: Number,
      required: true
    },
    r_click: {
      type: Number,
      required: true
    },
    time_click: {
      type: Number,
      required: true
    },
    time_click_array: {
      type: Array,
      required: true
    },
    time_next: {
      type: Number,
      required: true
    },
    bonus: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

const answer1 = mongoose.model("answer1", answer1Schema);
module.exports = answer1;
