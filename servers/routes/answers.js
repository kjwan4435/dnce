const answerRouter = require("express").Router();
let Answer = require("../models/answer.model");

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

  const newAnswer = new Answer({
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

module.exports = answerRouter;
