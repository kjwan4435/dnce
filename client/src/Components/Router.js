import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "Routes/home";
import explain from "Routes/explain";
import experiments from "Routes/experiments";
import experiments2 from "Routes/experiments2";
import finish from "Routes/finish";
import questions from "Routes/questions";
import Header from "Components/Header";

export default () => (
  <Router>
    <>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/explain" exact component={explain} />
      <Route path="/questions" exact component={questions} />
      <Route path="/experiment/:id/model1" exact component={experiments} />
      <Route path="/experiment/:id/model2" exact component={experiments2} />
      <Route path="/finish" exact component={finish} />
    </>
  </Router>
);
