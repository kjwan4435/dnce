import React, { Component } from "react";
import Exp1Presenter from "./Exp1Presenter";
import axios from "axios";
import qs from "qs";

export default class extends Component {
  state = {
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
    bonus: 0,

    people1: 0,
    people2: 0,
    people3: 0,
    people4: 0,
    people5: 0,
    people6: 0
  };

  setCharBorder = async () => {
    let people1 = await document.getElementsByClassName("people1");
    let people2 = await document.getElementsByClassName("people2");
    let people3 = await document.getElementsByClassName("people3");
    let people4 = await document.getElementsByClassName("people4");
    let people5 = await document.getElementsByClassName("people5");
    let people6 = await document.getElementsByClassName("people6");

    if (this.state.people1 === 1) {
      for (var i = 0; i < people1.length; i++) {
        people1[i].style.border = "5px solid green";
      }
    } else if (this.state.people2 === 1) {
      for (var i = 0; i < people2.length; i++) {
        people2[i].style.border = "5px solid green";
      }
    } else if (this.state.people3 === 1) {
      for (var i = 0; i < people3.length; i++) {
        people3[i].style.border = "5px solid green";
      }
    } else if (this.state.people4 === 1) {
      for (var i = 0; i < people4.length; i++) {
        people4[i].style.border = "5px solid green";
      }
    } else if (this.state.people5 === 1) {
      for (var i = 0; i < people5.length; i++) {
        people5[i].style.border = "5px solid green";
      }
    } else if (this.state.people6 === 1) {
      for (var i = 0; i < people6.length; i++) {
        people6[i].style.border = "5px solid green";
      }
    }
  };

  clickPeople1 = async () => {
    await this.setState({ people1: 1 });
    console.log(this.state);
    await this.setCharBorder();
    await this.handleNext();
  };
  clickPeople2 = async () => {
    await this.setState({ people2: 1 });
    console.log(this.state);
    await this.setCharBorder();
    await this.handleNext();
  };
  clickPeople3 = async () => {
    await this.setState({ people3: 1 });
    console.log(this.state);
    await this.setCharBorder();
    await this.handleNext();
  };
  clickPeople4 = async () => {
    await this.setState({ people4: 1 });
    console.log(this.state);
    await this.setCharBorder();
    await this.handleNext();
  };
  clickPeople5 = async () => {
    await this.setState({ people5: 1 });
    console.log(this.state);
    await this.setCharBorder();
    await this.handleNext();
  };
  clickPeople6 = async () => {
    await this.setState({ people6: 1 });
    console.log(this.state);
    await this.setCharBorder();
    await this.handleNext();
  };

  setBorder = async () => {
    let leftArray = await document.getElementsByClassName("left");
    let rightArray = await document.getElementsByClassName("right");
    if (this.state.lclick === 1) {
      for (var i = 0; i < leftArray.length; i++) {
        leftArray[i].style.border = "5px solid";
      }
      for (var i = 0; i < rightArray.length; i++) {
        rightArray[i].style.border = "0px";
      }
    } else if (this.state.rclick === 1) {
      for (var i = 0; i < leftArray.length; i++) {
        leftArray[i].style.border = "0px";
      }
      for (var i = 0; i < rightArray.length; i++) {
        rightArray[i].style.border = "5px solid";
      }
    } else {
      for (var i = 0; i < leftArray.length; i++) {
        leftArray[i].style.border = "0px";
      }
      for (var i = 0; i < rightArray.length; i++) {
        rightArray[i].style.border = "0px";
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
  };

  sleep = (delay) => {
    let start = new Date().getTime();
    while (new Date().getTime() < start + delay);
  };

  bonusHandler = async () => {
    if (this.state.lclick === 1) {
      const number1 = (await Math.floor(Math.random() * 100)) + 1;
      if (number1 <= this.state.l_prob * 100) {
        this.setState({ bonus: this.state.bonus + this.state.l_num });
      }
    } else if (this.state.rclick === 1) {
      const number2 = (await Math.floor(Math.random() * 100)) + 1;
      console.log(number2);
      if (number2 <= this.state.r_prob * 100) {
        this.setState({ bonus: this.state.bonus + this.state.r_num });
      }
      console.log(this.state.bonus + this.state.r_num);
      console.log(this.state.bonus);
    }
  };

  setAnswer = async () => {
    const answer = {
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
    if (this.state.step > 5) {
      const time_next = +new Date();
      await this.setState({
        time_next: time_next - this.state.time_show
      });
      await this.bonusHandler();
      const answer = await this.setAnswer();
      const res = await axios.post(`/answers/exp1`, qs.stringify(answer));
      console.log(res.data);
    }

    await this.setState({
      step: this.state.step + 1,
      lclick: 0,
      rclick: 0,
      time_click_array: []
    });

    this.sleep(500);
    this.setBorder();

    if (this.state.step === 1) {
      document.getElementById(`${this.state.step - 1}`).style.display = "none";
      document.getElementById(`${this.state.step}`).style.display = "flex";
    }
    if (this.state.step === 2) {
      document.getElementById(`${this.state.step - 1}`).style.display = "none";
      document.getElementById(`${this.state.step}`).style.display = "flex";
    }
    if (this.state.step === 6) {
      document.getElementById(`${1}`).style.display = "none";
      document.getElementById(`${2}`).style.display = "flex";
    }
    const l_num = this.state.data[this.state.step][this.state.column[1]];
    const l_prob = this.state.data[this.state.step][this.state.column[2]];
    const r_num = this.state.data[this.state.step][this.state.column[3]];
    const r_prob = this.state.data[this.state.step][this.state.column[4]];
    await this.setState({ l_num, l_prob, r_num, r_prob });
    const time_show = +new Date();
    this.setState({
      time_show: time_show
    });
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
    if (this.state.step === 0) {
      document.getElementById(`${this.state.step}`).style.display = "flex";
      await this.getExp(2);
      this.sleep(2000);
      const array = Object.keys(this.state.data[0]);
      await this.setState({ column: array });
      this.handleNext();
    }
  };

  render = () => {
    return (
      <Exp1Presenter
        l_num={this.state.l_num}
        r_num={this.state.r_num}
        l_prob={this.state.l_prob}
        r_prob={this.state.r_prob}
        repeat={this.repeat}
        clickLeft={this.clickLeft}
        clickRight={this.clickRight}
        handleNext={this.handleNext}
        setCharBorder={this.setCharBorder}
        clickPeople1={this.clickPeople1}
        clickPeople2={this.clickPeople2}
        clickPeople3={this.clickPeople3}
        clickPeople4={this.clickPeople4}
        clickPeople5={this.clickPeople5}
        clickPeople6={this.clickPeople6}
      />
    );
  };
}
