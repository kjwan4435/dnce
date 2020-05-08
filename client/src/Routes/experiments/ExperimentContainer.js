import React, { Component } from "react";
import ExperimentPresenter from "./ExperimentPresenter";
import axios from "axios";
import qs from "qs";

export default class extends Component {
  state = {
    sub_id: "",
    decision_sub: "",
    decision_bot1: "",
    decision_bot2: "",
    remain_sub: 5000,
    remain_bot1: 5000,
    remain_bot2: 5000,
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

  handleGoSubmit = async (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();

    await this.setState({ decision_sub: "GO" });

    const number1 = (await Math.floor(Math.random() * 10)) + 1;
    const number2 = (await Math.floor(Math.random() * 10)) + 1;
    if (number1 >= 5) {
      await this.setState({ decision_bot1: "GO" });
    } else {
      await this.setState({ decision_bot1: "SWERVE" });
    }
    if (number2 >= 5) {
      await this.setState({ decision_bot2: "GO" });
    } else {
      await this.setState({ decision_bot2: "SWERVE" });
    }

    const decision_sub = await this.state.decision_sub;
    const decision_bot1 = await this.state.decision_bot1;
    const decision_bot2 = await this.state.decision_bot2;

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
        remain_bot1: this.state.remain_bot1 - 60,
        remain_bot2: this.state.remain_bot2 - 60
      });
    }

    const answer = {
      sub_id: this.state.sub_id,
      bot_model: this.state.bot_model,
      decision_sub: this.state.decision_sub,
      decision_bot1: this.state.decision_bot1,
      decision_bot2: this.state.decision_bot2,
      remain_sub: this.state.remain_sub,
      remain_bot1: this.state.remain_bot1,
      remain_bot2: this.state.remain_bot2,
      trial: this.state.trial
    };

    await console.log(this.state);

    const res = await axios.post(
      `http://localhost:8080/answers/${this.state.sub_id}/${this.state.bot_model}`,
      qs.stringify(answer)
    );
    console.log(res.data);

    if (this.state.trial < 50) {
      await this.setState({
        trial: this.state.trial + 1
      });
    } else {
      window.location = `/experiment/${this.state.sub_id}/model2`;
    }
  };

  handleSwerveSubmit = async (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();

    await this.setState({ decision_sub: "SWERVE" });

    const number1 = (await Math.floor(Math.random() * 10)) + 1;
    const number2 = (await Math.floor(Math.random() * 10)) + 1;
    if (number1 >= 5) {
      await this.setState({ decision_bot1: "GO" });
    } else {
      await this.setState({ decision_bot1: "SWERVE" });
    }
    if (number2 >= 5) {
      await this.setState({ decision_bot2: "GO" });
    } else {
      await this.setState({ decision_bot2: "SWERVE" });
    }

    const decision_sub = await this.state.decision_sub;
    const decision_bot1 = await this.state.decision_bot1;
    const decision_bot2 = await this.state.decision_bot2;

    if (
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

    const answer = {
      sub_id: this.state.sub_id,
      bot_model: this.state.bot_model,
      decision_sub: this.state.decision_sub,
      decision_bot1: this.state.decision_bot1,
      decision_bot2: this.state.decision_bot2,
      remain_sub: this.state.remain_sub,
      remain_bot1: this.state.remain_bot1,
      remain_bot2: this.state.remain_bot2,
      trial: this.state.trial
    };

    await console.log(this.state);

    const res = await axios.post(
      `http://localhost:8080/answers/${this.state.sub_id}/${this.state.bot_model}`,
      qs.stringify(answer)
    );
    await console.log(res.data);

    if (this.state.trial < 50) {
      await this.setState({
        trial: this.state.trial + 1
      });
    } else {
      window.location = `/experiment/${this.state.sub_id}/model2`;
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
      remain_bot2
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
        handleGoSubmit={this.handleGoSubmit}
        handleSwerveSubmit={this.handleSwerveSubmit}
      />
    );
  };
}
