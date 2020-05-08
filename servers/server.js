const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

const db = require("./db");

const route = require("./routes/index");
const answerRouter = require("./routes/answers");
const subjectRouter = require("./routes/subjects");

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", route);
app.use("/answers", answerRouter);
app.use("/subjects", subjectRouter);

// serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`express is running on ${port}`);
});
