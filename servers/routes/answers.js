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

answerRouter.route("/add/:id").post((req, res) => {
  const sub_id = req.params.id;
  const decision_sub = req.body.decision_sub;
  const decision_bot1 = req.body.decision_bot1;
  const decision_bot2 = req.body.decision_bot2;
  const remain_sub = req.body.remain_sub;
  const remain_bot1 = req.body.remain_bot1;
  const remain_bot2 = req.body.remain_bot2;
  const duration = Number(req.body.duration);

  const newAnswer = new Answer({
    sub_id,
    decision_sub,
    decision_bot1,
    decision_bot2,
    remain_sub,
    remain_bot1,
    remain_bot2,
    duration,
  });

  newAnswer
    .save()
    .then((Answers) => res.json("New Answer Created"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = answerRouter;
