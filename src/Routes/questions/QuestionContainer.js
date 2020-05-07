import React, { Component } from "react";
import QuestionPresenter from "./QuestionPresenter";

//beomy.tistory.com/33 [beomy]

export default class extends Component {
  state = {
    age: null,
    sex: null,
    country: null,
    chickenGame: null,
    username: null,
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

  componentDidMount = async () => {
    await fetch("api")
      .then((res) => res.json())
      .then((data) => this.setState({ username: data.username }));
  };

  render = () => {
    const { age, sex, country, chickenGame, username } = this.state;
    return (
      <QuestionPresenter
        age={age}
        sex={sex}
        country={country}
        chickenGame={chickenGame}
        username={username}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  };
}
