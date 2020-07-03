const answerRouter = require("express").Router();
let Answer1 = require("../models/answer1.model");
let Answer2 = require("../models/answer2.model");
let Answer2_2 = require("../models/answer2_2.model");
let Answer2_3 = require("../models/answer2_3.model");
let Answer3 = require("../models/answer3.model");
let Bonus = require("../models/bonus.model");

answerRouter.route("/").get((req, res) => {
  Answer.find()
    .then((Answers) => res.json(Answers))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

answerRouter.route("/:id").get((req, res) => {
  Answer.findById(req.params.id)
    .then((answer) => res.json(answer))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

answerRouter.route("/exp1").post((req, res) => {
  const sub_id = req.body.sub_id;
  const trial = req.body.trial;
  const l_num = req.body.l_num;
  const l_prob = req.body.l_prob;
  const r_num = req.body.r_num;
  const r_prob = req.body.r_prob;
  const l_click = req.body.l_click;
  const r_click = req.body.r_click;
  const time_click = req.body.time_click;
  const time_click_array = req.body.time_click_array;
  const time_next = req.body.time_next;
  const bonus = req.body.bonus;

  const newAnswer = new Answer1({
    sub_id,
    trial,
    l_num,
    l_prob,
    r_num,
    r_prob,
    l_click,
    r_click,
    time_click,
    time_click_array,
    time_next,
    bonus
  });

  newAnswer
    .save()
    .then(() => res.json(newAnswer))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

answerRouter.route("/exp2/:id").get((req, res) => {
  console.log(req.params.id);
  Answer2.findOne({ sub_id: req.params.id })
    .then((answer) => res.json(answer))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

answerRouter.route("/exp2").post((req, res) => {
  const sub_id = req.body.sub_id;
  const trial = req.body.trial;
  const l_num = req.body.l_num;
  const l_prob = req.body.l_prob;
  const r_num = req.body.r_num;
  const r_prob = req.body.r_prob;
  const partner = req.body.partner;
  const partner1 = req.body.partner1;
  const partner2 = req.body.partner2;
  const partner_c = req.body.partner_c;
  const l_click = req.body.l_click;
  const r_click = req.body.r_click;
  const time_click = req.body.time_click;
  const time_click_array = req.body.time_click_array;
  const time_next = req.body.time_next;
  const bonus = req.body.bonus;
  const character = req.body.character;

  const newAnswer = new Answer2({
    sub_id,
    trial,
    l_num,
    l_prob,
    r_num,
    r_prob,
    partner,
    partner1,
    partner2,
    partner_c,
    l_click,
    r_click,
    time_click,
    time_click_array,
    time_next,
    bonus,
    character
  });

  newAnswer
    .save()
    .then(() => res.json(newAnswer))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

answerRouter.route("/exp2-2").post((req, res) => {
  const sub_id = req.body.sub_id;
  const trial = req.body.trial;
  const l_num = req.body.l_num;
  const l_prob = req.body.l_prob;
  const r_num = req.body.r_num;
  const r_prob = req.body.r_prob;
  const partner = req.body.partner;
  const partner1 = req.body.partner1;
  const partner2 = req.body.partner2;
  const partner_c = req.body.partner_c;
  const l_click = req.body.l_click;
  const r_click = req.body.r_click;
  const time_click = req.body.time_click;
  const time_click_array = req.body.time_click_array;
  const time_next = req.body.time_next;
  const bonus = req.body.bonus;
  const predict = req.body.predict;
  const time_predict = req.body.time_predict;

  const newAnswer = new Answer2_2({
    sub_id,
    trial,
    l_num,
    l_prob,
    r_num,
    r_prob,
    partner,
    partner1,
    partner2,
    partner_c,
    l_click,
    r_click,
    time_click,
    time_click_array,
    time_next,
    bonus,
    predict,
    time_predict
  });

  newAnswer
    .save()
    .then(() => res.json(newAnswer))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

answerRouter.route("/exp2-3").post((req, res) => {
  const sub_id = req.body.sub_id;
  const trial = req.body.trial;
  const partner = req.body.partner;
  const partner1 = req.body.partner1;
  const partner2 = req.body.partner2;
  const time_next = req.body.time_next;
  const predict = req.body.predict;
  const question = req.body.question;

  const newAnswer = new Answer2_3({
    sub_id,
    trial,
    partner,
    partner1,
    partner2,
    time_next,
    predict,
    question
  });

  newAnswer
    .save()
    .then(() => res.json(newAnswer))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

answerRouter.route("/exp3").post((req, res) => {
  const sub_id = req.body.sub_id;
  const trial = req.body.trial;
  const l_num = req.body.l_num;
  const l_prob = req.body.l_prob;
  const r_num = req.body.r_num;
  const r_prob = req.body.r_prob;
  const l_click = req.body.l_click;
  const r_click = req.body.r_click;
  const partner = req.body.partner;
  const partner1 = req.body.partner1;
  const partner2 = req.body.partner2;
  const partner_c = req.body.partner_c;
  const time_click = req.body.time_click;
  const time_click_array = req.body.time_click_array;
  const time_next = req.body.time_next;
  const bonus = req.body.bonus;

  const newAnswer = new Answer3({
    sub_id,
    trial,
    l_num,
    l_prob,
    r_num,
    r_prob,
    l_click,
    r_click,
    partner,
    partner1,
    partner2,
    partner_c,
    time_click,
    time_click_array,
    time_next,
    bonus
  });

  newAnswer
    .save()
    .then(() => res.json(newAnswer))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

answerRouter.route("/exp/bonus/:id").get((req, res) => {
  Answer1.findOne({
    sub_id: req.params.id,
    trial: Math.floor(Math.random() * 30) + 1
  })
    .then((answer) => res.json(answer))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});
answerRouter.route("/exp2/bonus/:id").get((req, res) => {
  Answer2_2.findOne({ sub_id: req.params.id, trial: 20 })
    .then((answer) => res.json(answer))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});
answerRouter.route("/exp3/bonus/:id").get((req, res) => {
  Answer3.findOne({
    sub_id: req.params.id,
    trial: Math.floor(Math.random() * 90) + 1
  })
    .then((answer) => res.json(answer))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

answerRouter.route("/bonus").post((req, res) => {
  const sub_id = req.body.sub_id;
  const trial1 = req.body.trial1;
  const trial3 = req.body.trial3;
  const bonus1 = req.body.bonus1;
  const bonus2 = req.body.bonus2;
  const bonus3 = req.body.bonus3;

  const newAnswer = new Bonus({
    sub_id,
    trial1,
    trial3,
    bonus1,
    bonus2,
    bonus3
  });

  newAnswer
    .save()
    .then(() => res.json(newAnswer))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = answerRouter;
