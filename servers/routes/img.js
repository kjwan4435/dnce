const expRouter = require("express").Router();
const exp1_1 = require("../data/exp1_1.json");
const exp1_2 = require("../data/exp1_2.json");
const exp1_3 = require("../data/exp1_3.json");
const exp1_4 = require("../data/exp1_4.json");
const exp2_1 = require("../data/exp2_1.json");
const exp2_2 = require("../data/exp2_2.json");
const exp2_3 = require("../data/exp2_3.json");
const exp2_4 = require("../data/exp2_4.json");
const exp3_1 = require("../data/exp3_1.json");
const exp3_2 = require("../data/exp3_2.json");
const exp3_3 = require("../data/exp3_3.json");
const exp3_4 = require("../data/exp3_4.json");
const quest = require("../data/quest.json");

expRouter.route("/1/1").get((req, res) => {
  return res.json(exp1_1);
});
expRouter.route("/1/2").get((req, res) => {
  return res.json(exp1_2);
});
expRouter.route("/1/3").get((req, res) => {
  return res.json(exp1_3);
});
expRouter.route("/1/4").get((req, res) => {
  return res.json(exp1_4);
});
expRouter.route("/2/1").get((req, res) => {
  return res.json(exp2_1);
});
expRouter.route("/2/2").get((req, res) => {
  return res.json(exp2_2);
});
expRouter.route("/2/3").get((req, res) => {
  return res.json(exp2_3);
});
expRouter.route("/2/4").get((req, res) => {
  return res.json(exp2_4);
});
expRouter.route("/3/1").get((req, res) => {
  return res.json(exp3_1);
});
expRouter.route("/3/2").get((req, res) => {
  return res.json(exp3_2);
});
expRouter.route("/3/3").get((req, res) => {
  return res.json(exp3_3);
});
expRouter.route("/3/4").get((req, res) => {
  return res.json(exp3_4);
});
expRouter.route("/quest").get((req, res) => {
  return res.json(quest);
});

module.exports = expRouter;
