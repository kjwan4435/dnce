const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const answer2_2Schema = new Schema(
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
    partner_c: {
      type: Number,
      required: "PARTNER CHOICE REQUIRED"
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
    },
    predict: {
      type: Number,
      required: true
    },
    time_predict: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

const answer2_2 = mongoose.model("answer2_2", answer2_2Schema);
module.exports = answer2_2;
