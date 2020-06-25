import React, { Component } from "react";
import Exp1Presenter from "./Exp1Presenter";

export default class extends Component {
  state = {
    sub_id: "",
    step: 1,
    lclick: 0,
    rclick: 0
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
    await this.setBorder();
    await this.handleNext();
  };

  clickRight = async () => {
    await this.setState({ lclick: 0, rclick: 1 });
    await this.setBorder();
    await this.handleNext();
  };

  repeat = async () => {
    await this.setState({ step: 1 });
    document.getElementById(`${this.state.step}`).style.display = "flex";
    document.getElementById(`9`).style.display = "none";
  };

  handleNext = async () => {
    await this.setState({ step: this.state.step + 1 });
    if (this.state.step === 5 || this.state.step === 9) {
      await this.setState({ lclick: 0, rclick: 0 });
      await this.setBorder();
    }
    if (this.state.step > 1) {
      document.getElementById(`${this.state.step - 1}`).style.display = "none";
      document.getElementById(`${this.state.step}`).style.display = "flex";
    }
  };

  componentDidMount = async () => {
    const href = await window.location.href.split("/");
    await this.setState({
      sub_id: href[href.length - 2]
    });
    if (this.state.step === 1) {
      document.getElementById(`${this.state.step}`).style.display = "flex";
    }
  };

  render = () => {
    return (
      <Exp1Presenter
        sub_id={this.state.sub_id}
        repeat={this.repeat}
        clickLeft={this.clickLeft}
        clickRight={this.clickRight}
        handleNext={this.handleNext}
      />
    );
  };
}
