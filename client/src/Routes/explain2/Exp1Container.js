import React, { Component } from "react";
import Exp1Presenter from "./Exp1Presenter";

export default class extends Component {
  state = {
    step: 1,
    lclick: 0,
    rclick: 0,
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
    console.log(people1);
    console.log(people6);

    if (this.state.people1 === 1) {
      for (var i = 0; i < people1.length; i++) {
        people1[i].style.border = "5px solid green";
        // people2[i].style.border = "0px";
        // people3[i].style.border = "0px";
        // people4[i].style.border = "0px";
        // people5[i].style.border = "0px";
        // people6[i].style.border = "0px";
      }
    } else if (this.state.people2 === 1) {
      for (var i = 0; i < people2.length; i++) {
        people1[i].style.border = "0px";
        people2[i].style.border = "5px solid green";
        people3[i].style.border = "0px";
        people4[i].style.border = "0px";
        people5[i].style.border = "0px";
        people6[i].style.border = "0px";
      }
    } else if (this.state.people3 === 1) {
      for (var i = 0; i < people3.length; i++) {
        people1[i].style.border = "0px";
        people2[i].style.border = "0px";
        people3[i].style.border = "5px solid green";
        people4[i].style.border = "0px";
        people5[i].style.border = "0px";
        people6[i].style.border = "0px";
      }
    } else if (this.state.people4 === 1) {
      for (var i = 0; i < people4.length; i++) {
        people1[i].style.border = "0px";
        people2[i].style.border = "0px";
        people3[i].style.border = "0px";
        people4[i].style.border = "5px solid green";
        people5[i].style.border = "0px";
        people6[i].style.border = "0px";
      }
    } else if (this.state.people5 === 1) {
      for (var i = 0; i < people5.length; i++) {
        people1[i].style.border = "0px";
        people2[i].style.border = "0px";
        people3[i].style.border = "0px";
        people4[i].style.border = "0px";
        people5[i].style.border = "5px solid green";
        people6[i].style.border = "0px";
      }
    } else if (this.state.people6 === 1) {
      for (var i = 0; i < people6.length; i++) {
        people6[i].style.border = "5px solid green";
      }
    } else {
      for (var i = 0; i < people1.length; i++) {
        people1[i].style.border = "0px";
        people2[i].style.border = "0px";
        people3[i].style.border = "0px";
        people4[i].style.border = "0px";
        people5[i].style.border = "0px";
        people6[i].style.border = "0px";
      }
    }
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
    await this.setBorder();
    await this.handleNext();
  };

  clickRight = async () => {
    await this.setState({ lclick: 0, rclick: 1 });
    await this.setBorder();
    await this.handleNext();
  };

  clickPeople = async () => {
    await this.setState({ people6: 1 });
    console.log(this.state);
    await this.setCharBorder();
    await this.handleNext();
  };

  repeat = async () => {
    await this.setState({ step: 1 });
    document.getElementById(`${this.state.step}`).style.display = "flex";
    document.getElementById(`25`).style.display = "none";
  };

  handleNext = async () => {
    await this.setState({ step: this.state.step + 1 });
    if (this.state.step === 15 || this.state.step === 20) {
      await this.setState({ lclick: 0, rclick: 0 });
      await this.setBorder();
    }
    if (this.state.step > 1) {
      document.getElementById(`${this.state.step - 1}`).style.display = "none";
      document.getElementById(`${this.state.step}`).style.display = "flex";
    }
  };

  componentDidMount = () => {
    if (this.state.step === 1) {
      document.getElementById(`${this.state.step}`).style.display = "flex";
    }
    let slider = document.getElementById("myRange");
    let output = document.getElementById("demo");
    output.innerHTML = slider.value;

    slider.oninput = function () {
      output.innerHTML = this.value;
      slider.value = this.value;
    };
  };

  render = () => {
    return (
      <Exp1Presenter
        repeat={this.repeat}
        clickLeft={this.clickLeft}
        clickRight={this.clickRight}
        clickPeople={this.clickPeople}
        handleNext={this.handleNext}
      />
    );
  };
}
