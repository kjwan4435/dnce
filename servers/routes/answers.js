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

answerRouter.route("/:id/:bot_model").post((req, res) => {
  const sub_id = req.params.id;
  const bot_model = req.params.bot_model;
  const decision_sub = req.body.decision_sub;
  const decision_bot1 = req.body.decision_bot1;
  const decision_bot2 = req.body.decision_bot2;
  const remain_sub = req.body.remain_sub;
  const remain_bot1 = req.body.remain_bot1;
  const remain_bot2 = req.body.remain_bot2;
  const rank_sub = req.body.rank_sub;
  const rank_bot1 = req.body.rank_bot1;
  const rank_bot2 = req.body.rank_bot2;
  const trial = req.body.trial;

  const newAnswer = new Answer({
    sub_id,
    bot_model,
    decision_sub,
    decision_bot1,
    decision_bot2,
    remain_sub,
    remain_bot1,
    remain_bot2,
    rank_sub,
    rank_bot1,
    rank_bot2,
    trial
  });

  newAnswer
    .save()
    .then(() => res.json(newAnswer.sub_id))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = answerRouter;
