import React, { Component } from "react";
import QuestionPresenter from "./QuestionPresenter";
import axios from "axios";
import qs from "qs";

export default class extends Component {
  state = {
    name: "",
    age: "",
    sex: "",
    education: "",
    email: "",
    id: ""
  };

  handleChange = (e) => {
    const {
      target: { value, name }
    } = e;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onCreate 를 통하여 부모에게 전달
    const subject = {
      name: this.state.name,
      age: Number(this.state.age),
      sex: this.state.sex,
      education: this.state.education,
      email: this.state.email
    };

    console.log(subject);

    axios
      .post("http://localhost:8080/subjects/add", qs.stringify(subject))
      .then(async (res) => {
        console.log(res.data);
        await this.setState({ id: res.data });
        window.location = `/experiment/${this.state.id}/model1`;
      })
      .catch((response) => {
        console.log(response);
      });
  };

  render = () => {
    const { name, age, sex, education, email } = this.state;
    return (
      <QuestionPresenter
        name={name}
        age={age}
        sex={sex}
        education={education}
        email={email}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  };
}
