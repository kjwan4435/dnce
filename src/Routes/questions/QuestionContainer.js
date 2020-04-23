import React, { Component } from "react";
import QuestionPresenter from "./QuestionPresenter";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class extends Component {
  state = {
    age: null,
    sex: null,
    country: null,
    chickenGame: null,
  };

  handleChange = (e) => {
    const {
      target: { value, name },
    } = e;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onCreate 를 통하여 부모에게 전달
    console.log(this.state);
    // 상태 초기화
    this.setState({
      age: "",
      sex: "",
      country: "",
      chickenGame: "",
    });
  };

  render = () => {
    const { age, sex, country, chickenGame } = this.state;
    return (
      <QuestionPresenter
        age={age}
        sex={sex}
        country={country}
        chickenGame={chickenGame}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  };
}
