import React, { Component } from "react";
import Exp1Presenter from "./Exp1Presenter";
import axios from "axios";
import qs from "qs";

export default class extends Component {
  state = {
    sub_id: "",
    step: 0,
    lclick: 0,
    rclick: 0,
    data: {},
    column: {},
    l_num: 0,
    r_num: 0,
    l_prob: 0,
    r_prob: 0,
    time_show: 0,
    time_click: 0,
    time_click_array: [],
    time_next: 0,
    bonus: 0
  };

  setBorder = async () => {
    let leftArray = await document.getElementsByClassName("left");
    let rightArray = await document.getElementsByClassName("right");
    if (this.state.lclick === 1) {
      for (let i = 0; i < leftArray.length; i++) {
        leftArray[i].style.border = "5px solid";
      }
      for (let j = 0; j < rightArray.length; j++) {
        rightArray[j].style.border = "0px";
      }
    } else if (this.state.rclick === 1) {
      for (let i = 0; i < leftArray.length; i++) {
        leftArray[i].style.border = "0px";
      }
      for (let j = 0; j < rightArray.length; j++) {
        rightArray[j].style.border = "5px solid";
      }
    } else {
      for (let i = 0; i < leftArray.length; i++) {
        leftArray[i].style.border = "0px";
      }
      for (let j = 0; j < rightArray.length; j++) {
        rightArray[j].style.border = "0px";
      }
    }
  };

  clickLeft = async () => {
    await this.setState({ lclick: 1, rclick: 0 });
    const time_click = +new Date();
    let array = this.state.time_click_array;
    array.push(time_click - this.state.time_show);
    this.setState({
      time_click: time_click - this.state.time_show,
      time_click_array: array
    });
    await this.setBorder();
    document.getElementById("hideNext").style.display = "flex";
  };

  clickRight = async () => {
    await this.setState({ lclick: 0, rclick: 1 });
    const time_click = +new Date();
    let array = this.state.time_click_array;
    array.push(time_click - this.state.time_show);
    this.setState({
      time_click: time_click - this.state.time_show,
      time_click_array: array
    });
    await this.setBorder();
    document.getElementById("hideNext").style.display = "flex";
  };

  sleep = (delay) => {
    let start = new Date().getTime();
    while (new Date().getTime() < start + delay);
  };

  bonusHandler = async () => {
    if (this.state.lclick === 1) {
      const number1 = (await Math.floor(Math.random() * 100)) + 1;
      if (number1 <= this.state.l_prob * 100) {
        this.setState({ bonus: this.state.l_num * 3 });
      }
    } else if (this.state.rclick === 1) {
      const number2 = (await Math.floor(Math.random() * 100)) + 1;
      if (number2 <= this.state.r_prob * 100) {
        this.setState({ bonus: this.state.r_num * 3 });
      }
    }
  };

  setAnswer = async () => {
    const answer = {
      sub_id: this.state.sub_id,
      trial: this.state.step,
      l_num: this.state.l_num,
      l_prob: this.state.l_prob,
      r_num: this.state.r_num,
      r_prob: this.state.r_prob,
      l_click: this.state.lclick,
      r_click: this.state.rclick,
      time_click: this.state.time_click,
      time_click_array: this.state.time_click_array,
      time_next: this.state.time_next,
      bonus: this.state.bonus
    };
    return answer;
  };

  handleNext = async () => {
    if (this.state.step > 0) {
      document.getElementById("hideNext").style.display = "none";
      document.getElementById("loader").style.display = "flex";
      const time_next = +new Date();
      await this.setState({
        time_next: time_next - this.state.time_show
      });
      await this.bonusHandler();
      const answer = await this.setAnswer();
      const res = await axios.post(`/answers/exp1`, qs.stringify(answer));
      console.log(res.data);
      document.getElementById("loader").style.display = "none";
    }

    await this.setState({
      step: this.state.step + 1,
      lclick: 0,
      rclick: 0,
      bonus: 0,
      time_click_array: []
    });

    this.sleep(500);
    this.setBorder();

    if (this.state.step === 1) {
      document.getElementById(`${this.state.step - 1}`).style.display = "none";
      document.getElementById(`${this.state.step}`).style.display = "flex";
    }
    if (this.state.step === 31) {
      document.getElementById(`${1}`).style.display = "none";
      document.getElementById(`${2}`).style.display = "flex";
    }
    if (this.state.step > 0 && this.state.step < 31) {
      const l_num = this.state.data[this.state.step - 1][this.state.column[1]];
      const l_prob = this.state.data[this.state.step - 1][this.state.column[2]];
      const r_num = this.state.data[this.state.step - 1][this.state.column[3]];
      const r_prob = this.state.data[this.state.step - 1][this.state.column[4]];
      await this.setState({ l_num, l_prob, r_num, r_prob });
      const time_show = +new Date();
      this.setState({
        time_show: time_show
      });
    }
  };

  getExp = async (round) => {
    const number = (await Math.floor(Math.random() * 4)) + 1;
    try {
      const result = await axios.get(`/exp/${round}/${number}`);
      await this.setState({ data: result.data });
    } catch (error) {
      console.error(error);
    }
  };

  componentDidMount = async () => {
    const href = await window.location.href.split("/");
    await this.setState({
      sub_id: href[href.length - 2]
    });
    if (this.state.step === 0) {
      document.getElementById("hideNext").style.display = "none";
      document.getElementById(`${this.state.step}`).style.display = "flex";
      await this.getExp(1);
      this.sleep(2000);
      const array = Object.keys(this.state.data[0]);
      await this.setState({ column: array });
      this.handleNext();
    }
  };

  render = () => {
    return (
      <Exp1Presenter
        sub_id={this.state.sub_id}
        l_num={this.state.l_num}
        r_num={this.state.r_num}
        l_prob={this.state.l_prob}
        r_prob={this.state.r_prob}
        repeat={this.repeat}
        clickLeft={this.clickLeft}
        clickRight={this.clickRight}
        handleNext={this.handleNext}
      />
    );
  };
}
