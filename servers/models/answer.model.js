const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const answerSchema = new Schema(
  {
    bot_model: {
      type: String,
      required: "bot model is undefined"
    },
    sub_id: {
      type: String,
      required: "your ID is unidentifed"
    },
    decision_sub: {
      type: String,
      required: "Go or Swerve?"
    },
    decision_bot1: {
      type: String,
      required: true
    },
    decision_bot2: {
      type: String,
      required: true
    },
    remain_sub: {
      type: Number,
      required: true
    },
    remain_bot1: {
      type: Number,
      required: true
    },
    remain_bot2: {
      type: Number,
      required: true
    },
    rank_sub: {
      type: Number,
      required: true
    },
    rank_bot1: {
      type: Number,
      required: true
    },
    rank_bot2: {
      type: Number,
      required: true
    },
    trial: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const answer = mongoose.model("answer", answerSchema);
module.exports = answer;
