const subRouter = require("express").Router();
let Subject = require("../models/subject.model");

subRouter.route("/").get((req, res) => {
  Subject.find()
    .then((subjects) => res.json(subjects))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

subRouter.route("/add").post((req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const sex = req.body.sex;
  const education = req.body.education;

  const newSubject = new Subject({ name, age, sex, education });

  newSubject
    .save()
    .then((subjects) => res.json("New Subject Joined"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = subRouter;
