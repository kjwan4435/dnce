const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const db = require("./db");

const route = require("./routes/index");
const answerRouter = require("./routes/answers");
const subjectRouter = require("./routes/subjects");

const app = express();
const port = process.env.PORT || 8080;

app.use(morgan("dev"));
app.use(bodyParser.json());

app.use("/api", route);
app.use("/answers", answerRouter);
app.use("/subjects", subjectRouter);

app.listen(port, () => {
  console.log(`express is running on ${port}`);
});
