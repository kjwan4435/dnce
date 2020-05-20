import React, { Component } from "react";
import ExperimentPresenter from "./ExperimentPresenter";

export default class extends Component {
  state = {
    sub_id: "",
    decision_sub: "",
    decision_bot1: "",
    decision_bot2: "",
    remain_sub: 5000,
    remain_bot1: 5000,
    remain_bot2: 5000,
    rank_sub: 1,
    rank_bot1: 1,
    rank_bot2: 1,
    do_rank_bot1: 1,
    do_rank_bot2: 1,
    bot_model: "",
    trial: 1
  };

  handleChange = (e) => {
    const {
      target: { value, name }
    } = e;
    this.setState({
      [name]: value
    });
  };

  setBotDecisionGo = async () => {
    await this.setState({ decision_sub: "GO" });

    const number1 = (await Math.floor(Math.random() * 10)) + 1;
    const number2 = (await Math.floor(Math.random() * 10)) + 1;
    if (number1 >= 6) {
      await this.setState({ decision_bot1: "GO" });
    } else {
      await this.setState({ decision_bot1: "SWERVE" });
    }
    if (number2 >= 6) {
      await this.setState({ decision_bot2: "GO" });
    } else {
      await this.setState({ decision_bot2: "SWERVE" });
    }
  };

  setBotDecisionSwerve = async () => {
    await this.setState({ decision_sub: "SWERVE" });

    const number1 = (await Math.floor(Math.random() * 10)) + 1;
    const number2 = (await Math.floor(Math.random() * 10)) + 1;
    if (number1 >= 6) {
      await this.setState({ decision_bot1: "GO" });
    } else {
      await this.setState({ decision_bot1: "SWERVE" });
    }
    if (number2 >= 6) {
      await this.setState({ decision_bot2: "GO" });
    } else {
      await this.setState({ decision_bot2: "SWERVE" });
    }
  };

  calculatePoint = async (decision_sub, decision_bot1, decision_bot2) => {
    if (
      decision_sub === "GO" &&
      decision_bot1 === "GO" &&
      decision_bot2 === "GO"
    ) {
      await this.setState({
        remain_sub: this.state.remain_sub - 100,
        remain_bot1: this.state.remain_bot1 - 100,
        remain_bot2: this.state.remain_bot2 - 100
      });
    } else if (
      decision_sub === "GO" &&
      decision_bot1 === "GO" &&
      decision_bot2 === "SWERVE"
    ) {
      await this.setState({
        remain_sub: this.state.remain_sub - 60,
        remain_bot1: this.state.remain_bot1 - 60,
        remain_bot2: this.state.remain_bot2 - 20
      });
    } else if (
      decision_sub === "GO" &&
      decision_bot1 === "SWERVE" &&
      decision_bot2 === "GO"
    ) {
      await this.setState({
        remain_sub: this.state.remain_sub - 60,
        remain_bot1: this.state.remain_bot1 - 20,
        remain_bot2: this.state.remain_bot2 - 60
      });
    } else if (
      decision_sub === "GO" &&
      decision_bot1 === "SWERVE" &&
      decision_bot2 === "SWERVE"
    ) {
      await this.setState({
        remain_sub: this.state.remain_sub + 20,
        remain_bot1: this.state.remain_bot1 - 20,
        remain_bot2: this.state.remain_bot2 - 20
      });
    } else if (
      decision_sub === "SWERVE" &&
      decision_bot1 === "GO" &&
      decision_bot2 === "GO"
    ) {
      await this.setState({
        remain_sub: this.state.remain_sub - 20,
        remain_bot1: this.state.remain_bot1 - 60,
        remain_bot2: this.state.remain_bot2 - 60
      });
    } else if (
      decision_sub === "SWERVE" &&
      decision_bot1 === "GO" &&
      decision_bot2 === "SWERVE"
    ) {
      await this.setState({
        remain_sub: this.state.remain_sub - 20,
        remain_bot1: this.state.remain_bot1 + 20,
        remain_bot2: this.state.remain_bot2 - 20
      });
    } else if (
      decision_sub === "SWERVE" &&
      decision_bot1 === "SWERVE" &&
      decision_bot2 === "GO"
    ) {
      await this.setState({
        remain_sub: this.state.remain_sub - 20,
        remain_bot1: this.state.remain_bot1 - 20,
        remain_bot2: this.state.remain_bot2 + 20
      });
    } else if (
      decision_sub === "SWERVE" &&
      decision_bot1 === "SWERVE" &&
      decision_bot2 === "SWERVE"
    ) {
      await this.setState({
        remain_sub: this.state.remain_sub,
        remain_bot1: this.state.remain_bot1,
        remain_bot2: this.state.remain_bot2
      });
    }
  };

  hideComponent = () => {
    document.getElementById("hideSubmit").style.display = "none";
  };

  showComponent = () => {
    document.getElementById("hideSubmit").style.display = "flex";
  };

  calculateRank = async () => {
    let points = [
      this.state.remain_sub,
      this.state.remain_bot1,
      this.state.remain_bot2
    ];
    await points.sort(function (a, b) {
      return b - a;
    });

    this.setState({
      rank_sub: points.indexOf(this.state.remain_sub) + 1,
      rank_bot1: points.indexOf(this.state.remain_bot1) + 1,
      rank_bot2: points.indexOf(this.state.remain_bot2) + 1,
      do_rank_bot1: points.indexOf(this.state.remain_bot1) + 1,
      do_rank_bot2: points.indexOf(this.state.remain_bot2) + 1
    });

    if (this.state.do_rank_bot1 === this.state.do_rank_bot2) {
      this.setState({ do_rank_bot2: this.state.do_rank_bot1 + 1 });
    }
  };

  setAnswer = async () => {
    const answer = {
      sub_id: this.state.sub_id,
      bot_model: this.state.bot_model,
      decision_sub: this.state.decision_sub,
      decision_bot1: this.state.decision_bot1,
      decision_bot2: this.state.decision_bot2,
      remain_sub: this.state.remain_sub,
      remain_bot1: this.state.remain_bot1,
      remain_bot2: this.state.remain_bot2,
      rank_sub: this.state.rank_sub,
      rank_bot1: this.state.rank_bot1,
      rank_bot2: this.state.rank_bot2,
      trial: this.state.trial
    };
    return answer;
  };

  handleGoSubmit = async (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();

    this.hideComponent();
    await this.setBotDecisionGo();

    const decision_sub = await this.state.decision_sub;
    const decision_bot1 = await this.state.decision_bot1;
    const decision_bot2 = await this.state.decision_bot2;

    await this.calculatePoint(decision_sub, decision_bot1, decision_bot2);
    await this.calculateRank();

    const answer = await this.setAnswer();

    console.log(answer);

    setTimeout(this.showComponent, 2000);

    if (this.state.trial < 10) {
      await this.setState({
        trial: this.state.trial + 1
      });
    } else {
      window.location = `/experiment/${this.state.sub_id}/model1`;
    }
  };

  handleSwerveSubmit = async (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();

    this.hideComponent();
    await this.setBotDecisionSwerve();

    const decision_sub = await this.state.decision_sub;
    const decision_bot1 = await this.state.decision_bot1;
    const decision_bot2 = await this.state.decision_bot2;

    await this.calculatePoint(decision_sub, decision_bot1, decision_bot2);
    await this.calculateRank();

    const answer = await this.setAnswer();

    console.log(answer);

    setTimeout(this.showComponent, 2000);

    if (this.state.trial < 10) {
      await this.setState({
        trial: this.state.trial + 1
      });
    } else {
      window.location = `/experiment/${this.state.sub_id}/model1`;
    }
  };

  componentDidMount = async () => {
    const href = await window.location.href.split("/");
    await this.setState({
      sub_id: href[href.length - 2],
      bot_model: href[href.length - 1]
    });
  };

  render = () => {
    const {
      sub_id,
      decision_sub,
      decision_bot1,
      decision_bot2,
      remain_sub,
      remain_bot1,
      remain_bot2,
      rank_sub,
      rank_bot1,
      rank_bot2
    } = this.state;
    return (
      <ExperimentPresenter
        sub_id={sub_id}
        decision_sub={decision_sub}
        decision_bot1={decision_bot1}
        decision_bot2={decision_bot2}
        remain_sub={remain_sub}
        remain_bot1={remain_bot1}
        remain_bot2={remain_bot2}
        rank_sub={rank_sub}
        rank_bot1={rank_bot1}
        rank_bot2={rank_bot2}
        handleGoSubmit={this.handleGoSubmit}
        handleSwerveSubmit={this.handleSwerveSubmit}
      />
    );
  };
}
