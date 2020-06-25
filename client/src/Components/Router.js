import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../Routes/home";
import explain1 from "../Routes/explain1";
import explain2 from "../Routes/explain2";
import explain3 from "../Routes/explain3";
import experiment1 from "../Routes/experiment1";
import experiment2 from "../Routes/experiment2";
import experiment3 from "../Routes/experiment3";

import finish from "../Routes/finish";
import questions from "../Routes/questions";

export default () => (
  <Router>
    <>
      <Route path="/:id" exact component={Home} />
      <Route path="/:id/explain1" exact component={explain1} />
      <Route path="/:id/explain3" exact component={explain3} />
      <Route path="/:id/explain2" exact component={explain2} />
      <Route path="/:id/experiment1" exact component={experiment1} />
      <Route path="/:id/experiment2" exact component={experiment2} />
      <Route path="/:id/experiment3" exact component={experiment3} />
      <Route path="/:id/questions" exact component={questions} />
      <Route path="/:id/finish" exact component={finish} />
    </>
  </Router>
);
