import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../Routes/home";
import explain1 from "../Routes/explain1";
import explain2 from "../Routes/explain2";
import explain3 from "../Routes/explain3";
import experiment1 from "../Routes/experiment1";
import experiment2 from "../Routes/experiment2";
import experiment3 from "../Routes/experiment3";

// import explain from "../Routes/explain";
import experiments from "../Routes/experiments";
import experiments2 from "../Routes/experiments2";

import finish from "../Routes/finish";
import questions from "../Routes/questions";
import Header from "./Header";

export default () => (
  <Router>
    <>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/explain1" exact component={explain1} />
      <Route path="/explain2" exact component={explain2} />
      <Route path="/explain3" exact component={explain3} />
      <Route path="/experiment1" exact component={experiment1} />
      <Route path="/experiment2" exact component={experiment2} />
      <Route path="/experiment3" exact component={experiment3} />
      <Route path="/questions" exact component={questions} />
      <Route path="/experiment/:id/model1" exact component={experiments} />
      <Route path="/experiment/:id/model2" exact component={experiments2} />
      <Route path="/finish" exact component={finish} />
    </>
  </Router>
);
