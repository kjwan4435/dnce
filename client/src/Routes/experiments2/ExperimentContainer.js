import React, { Component } from "react";
import ExperimentPresenter from "./ExperimentPresenter";
import axios from "axios";
import qs from "qs";

export default class extends Component {
  state = {
    showTime: "",
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

  adj_control = (diff_bot) => {
    if (diff_bot >= 200) {
      return 40;
    } else if (diff_bot > 0) {
      return 40 * (diff_bot / 200);
    } else {
      return 0;
    }
  };

  bot1_decision = (number, adj) => {
    if (this.state.rank_bot1 === 1) {
      if (number >= 51) {
        this.setState({ decision_bot1: "GO" });
      } else {
        this.setState({ decision_bot1: "SWERVE" });
      }
    } else if (this.state.rank_bot1 === 2) {
      if (number >= 51 - adj) {
        this.setState({ decision_bot1: "GO" });
      } else {
        this.setState({ decision_bot1: "SWERVE" });
      }
    } else {
      if (number >= 51 + adj) {
        this.setState({ decision_bot1: "GO" });
      } else {
        this.setState({ decision_bot1: "SWERVE" });
      }
    }

    console.log(`bot1:${number}, ${51 - adj}`);
  };

  bot2_decision = (number, adj) => {
    if (this.state.rank_bot2 === 1) {
      if (number >= 51) {
        this.setState({ decision_bot2: "GO" });
      } else {
        this.setState({ decision_bot2: "SWERVE" });
      }
    } else if (this.state.rank_bot2 === 2) {
      if (number >= 51 - adj) {
        this.setState({ decision_bot2: "GO" });
      } else {
        this.setState({ decision_bot2: "SWERVE" });
      }
    } else {
      if (number >= 51 + adj) {
        this.setState({ decision_bot2: "GO" });
      } else {
        this.setState({ decision_bot2: "SWERVE" });
      }
    }

    console.log(`bot2:${number}, ${51 - adj}`);
  };

  setBotDecisionGo = async () => {
    await this.setState({ decision_sub: "GO" });

    const number1 = (await Math.floor(Math.random() * 100)) + 1;
    const number2 = (await Math.floor(Math.random() * 100)) + 1;
    const remains = [
      this.state.remain_sub,
      this.state.remain_bot1,
      this.state.remain_bot2
    ];
    const max_remains = await Math.max.apply(null, remains);
    const diff_bot1 = max_remains - this.state.remain_bot1;
    const diff_bot2 = max_remains - this.state.remain_bot2;

    const adj_bot1 = await this.adj_control(diff_bot1);
    const adj_bot2 = await this.adj_control(diff_bot2);

    await this.bot1_decision(number1, adj_bot1);
    await this.bot2_decision(number2, adj_bot2);
  };

  setBotDecisionSwerve = async () => {
    await this.setState({ decision_sub: "SWERVE" });

    const number1 = (await Math.floor(Math.random() * 100)) + 1;
    const number2 = (await Math.floor(Math.random() * 100)) + 1;
    const remains = [
      this.state.remain_sub,
      this.state.remain_bot1,
      this.state.remain_bot2
    ];
    const max_remains = await Math.max.apply(null, remains);
    const diff_bot1 = max_remains - this.state.remain_bot1;
    const diff_bot2 = max_remains - this.state.remain_bot2;

    const adj_bot1 = await this.adj_control(diff_bot1);
    const adj_bot2 = await this.adj_control(diff_bot2);

    await this.bot1_decision(number1, adj_bot1);
    await this.bot2_decision(number2, adj_bot2);
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
    document.getElementById("loader").style.display = "flex";
  };

  showComponent = () => {
    document.getElementById("hideSubmit").style.display = "flex";
    document.getElementById("loader").style.display = "none";
    const timestamp = +new Date();
    this.setState({
      showTime: timestamp
    });
  };

  nextRound = async () => {
    if (this.state.trial < 50) {
      await this.setState({
        trial: this.state.trial + 1
      });
    } else {
      window.location = `/experiment/${this.state.sub_id}/model3`;
    }
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

  setAnswer = async (res_time) => {
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
      trial: this.state.trial,
      res_time
    };
    return answer;
  };

  handleGoSubmit = async (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    const timestamp = +new Date();
    const res_time = timestamp - this.state.showTime;

    this.hideComponent();
    await this.setBotDecisionGo();

    const decision_sub = this.state.decision_sub;
    const decision_bot1 = this.state.decision_bot1;
    const decision_bot2 = this.state.decision_bot2;

    await this.calculatePoint(decision_sub, decision_bot1, decision_bot2);
    await this.calculateRank();

    const answer = await this.setAnswer(res_time);

    console.log(answer);

    const res = await axios.post(
      `/answers/${this.state.sub_id}/${this.state.bot_model}`,
      qs.stringify(answer)
    );
    console.log(res.data);

    setTimeout(this.showComponent, 2000);
    this.nextRound();
  };

  handleSwerveSubmit = async (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    const timestamp = +new Date();
    const res_time = timestamp - this.state.showTime;

    this.hideComponent();
    await this.setBotDecisionSwerve();

    const decision_sub = this.state.decision_sub;
    const decision_bot1 = this.state.decision_bot1;
    const decision_bot2 = this.state.decision_bot2;

    await this.calculatePoint(decision_sub, decision_bot1, decision_bot2);
    await this.calculateRank();

    const answer = await this.setAnswer(res_time);

    console.log(answer);

    const res = await axios.post(
      `/answers/${this.state.sub_id}/${this.state.bot_model}`,
      qs.stringify(answer)
    );
    await console.log(res.data);

    setTimeout(this.showComponent, 2000);
    this.nextRound();
  };

  componentDidMount = async () => {
    const href = await window.location.href.split("/");
    const timestamp = +new Date();
    await this.setState({
      sub_id: href[href.length - 2],
      bot_model: href[href.length - 1],
      showTime: timestamp
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
