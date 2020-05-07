const subRouter = require("express").Router();
let Subject = require("../models/subject.model");

subRouter.route("/").get((req, res) => {
  Subject.find()
    .then((subjects) => res.json(subjects))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

subRouter.route("/add").post((req, res) => {
  console.log(req.body);

  const name = req.body.name;
  const age = Number(req.body.age);
  const email = req.body.email;
  const sex = req.body.sex;
  const education = req.body.education;

  const newSubject = new Subject({ name, age, email, sex, education });

  newSubject
    .save()
    .then(() => res.json(newSubject.id))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = subRouter;
