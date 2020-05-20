import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../Routes/home";
import explain from "../Routes/explain";
import experiments from "../Routes/experiments";
import experiments2 from "../Routes/experiments2";
import experiments3 from "../Routes/experiments3";
import experiments4 from "../Routes/experiments4";
import finish from "../Routes/finish";
import questions from "../Routes/questions";
import tests from "../Routes/tests";
import Header from "./Header";

export default () => (
  <Router>
    <>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/explain" exact component={explain} />
      <Route path="/questions" exact component={questions} />
      <Route path="/experiment/:id/tests" exact component={tests} />
      <Route path="/experiment/:id/model1" exact component={experiments} />
      <Route path="/experiment/:id/model2" exact component={experiments2} />
      <Route path="/experiment/:id/model3" exact component={experiments3} />
      <Route path="/experiment/:id/model4" exact component={experiments4} />
      <Route path="/finish" exact component={finish} />
    </>
  </Router>
);
