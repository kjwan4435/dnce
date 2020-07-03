import React, { Component } from "react";
import Exp1Presenter from "./Exp1Presenter";
import axios from "axios";
import qs from "qs";

export default class extends Component {
  state = {
    sub_id: "",
    character: 1,
    partner1: 1,
    partner2: 1,
    partner_s: 0,
    partner: 0,
    partner_c: -1,
    partner_p: "open_door",
    step: -3,
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
    bonus1: 0,
    bonus2: 0,
    bonus3: 0,
    trial1: 0,
    trial2: 0,
    trial3: 0
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

  setPartner = async () => {
    let partner = this.state.data[this.state.step - 1][this.state.column[5]];
    if (partner === 1) {
      await this.setState({
        partner: this.state.partner1,
        partner_p: `door_avatar_${this.state.partner1}`
      });
    } else if (partner === 2) {
      await this.setState({
        partner: this.state.partner2,
        partner_p: `door_avatar_${this.state.partner2}`
      });
    } else {
      await this.setState({
        partner: 0,
        partner_p: "open_door"
      });
    }
    let partner_c = this.state.data[this.state.step - 1][this.state.column[6]];
    if (partner_c === 0 || partner_c === 1) {
      this.setState({
        partner_c: this.state.data[this.state.step - 1][this.state.column[6]]
      });
    } else {
      this.setState({
        partner_c: -99
      });
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
      partner: this.state.partner,
      partner1: this.state.partner1,
      partner2: this.state.partner2,
      partner_c: this.state.partner_c,
      time_click: this.state.time_click,
      time_click_array: this.state.time_click_array,
      time_next: this.state.time_next,
      bonus: this.state.bonus
    };
    return answer;
  };

  setBonusAnswer = async () => {
    const bonus = {
      sub_id: this.state.sub_id,
      trial1: this.state.trial1,
      trial3: this.state.trial3,
      bonus1: this.state.bonus1,
      bonus2: this.state.bonus2,
      bonus3: this.state.bonus3
    };
    return bonus;
  };

  showComponent = async () => {
    document.getElementById(`1-1`).style.display = "none";
    document.getElementById(`1-2`).style.display = "flex";
  };

  handleNext = async () => {
    if (this.state.step > 0 && this.state.step < 91) {
      document.getElementById("hideNext").style.display = "none";
      document.getElementById("loader").style.display = "flex";
      const time_next = +new Date();
      await this.setState({
        time_next: time_next - this.state.time_show
      });
      await this.bonusHandler();
      const answer = await this.setAnswer();
      const res = await axios.post(`/answers/exp3`, qs.stringify(answer));
      console.log(res.data);
      document.getElementById("loader").style.display = "none";
    }

    await this.setState({
      step: this.state.step + 1,
      lclick: 0,
      rclick: 0,
      bonus: 0,
      partner_c: -1,
      time_click_array: []
    });

    this.sleep(500);
    this.setBorder();

    if (
      this.state.step === -2 ||
      this.state.step === -1 ||
      this.state.step === 0
    ) {
      document.getElementById(`${this.state.step - 1}`).style.display = "none";
      document.getElementById(`${this.state.step}`).style.display = "flex";
      setTimeout(this.handleNext, 2000);
    }

    if (this.state.step === 1) {
      document.getElementById(`${this.state.step - 1}`).style.display = "none";
    }

    if (this.state.step > 0 && this.state.step < 91) {
      document.getElementById(`1-1`).style.display = "flex";
      document.getElementById(`1-2`).style.display = "none";

      await setTimeout(this.showComponent, 1000);
    }
    if (this.state.step === 91) {
      document.getElementById(`1-2`).style.display = "none";
      document.getElementById(`1`).style.display = "flex";
      try {
        const bonus1 = await axios.get(
          `/answers/exp/bonus/${this.state.sub_id}`
        );
        await this.setState({
          bonus1: bonus1.data.bonus,
          trial1: bonus1.data.trial
        });
      } catch (error) {
        console.error(error);
      }
      try {
        const bonus2 = await axios.get(
          `/answers/exp2/bonus/${this.state.sub_id}`
        );
        await this.setState({
          bonus2: bonus2.data.bonus
        });
      } catch (error) {
        console.error(error);
      }
      try {
        const bonus3 = await axios.get(
          `/answers/exp3/bonus/${this.state.sub_id}`
        );
        await this.setState({
          bonus3: bonus3.data.bonus,
          trial3: bonus3.data.trial
        });
      } catch (error) {
        console.error(error);
      }
    }
    if (this.state.step === 92) {
      document.getElementById(`1`).style.display = "none";
      document.getElementById(`2`).style.display = "flex";

      const bonus = await this.setBonusAnswer();
      const bonus_res = await axios.post(`/answers/bonus`, qs.stringify(bonus));
      console.log(bonus_res.data);
    }
    if (this.state.step === 93) {
      document.getElementById(`2`).style.display = "none";
      document.getElementById(`3`).style.display = "flex";
    }

    if (this.state.step > 0 && this.state.step < 91) {
      const l_num = this.state.data[this.state.step - 1][this.state.column[1]];
      const l_prob = this.state.data[this.state.step - 1][this.state.column[2]];
      const r_num = this.state.data[this.state.step - 1][this.state.column[3]];
      const r_prob = this.state.data[this.state.step - 1][this.state.column[4]];
      await this.setPartner();
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
    try {
      const answer2 = await axios.get(`/answers/exp2/${this.state.sub_id}`);
      await this.setState({
        character: answer2.data.character,
        partner1: answer2.data.partner1,
        partner2: answer2.data.partner2
      });
      if (this.state.partner1 === 7 || this.state.partner1 === 9) {
        await this.setState({
          partner_s: 0
        });
      } else {
        await this.setState({
          partner_s: 1
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  componentDidMount = async () => {
    const href = await window.location.href.split("/");
    await this.setState({
      sub_id: href[href.length - 2]
    });
    document.getElementById("hideNext").style.display = "none";
    if (this.state.step === -3) {
      document.getElementById(`${this.state.step}`).style.display = "flex";
      await this.getExp(3);
      this.sleep(2000);
      const array = Object.keys(this.state.data[0]);
      await this.setState({ column: array });
      this.handleNext();
    }
  };

  render = () => {
    return (
      <Exp1Presenter
        character={this.state.character}
        partner={this.state.partner}
        partner_p={this.state.partner_p}
        partner1={this.state.partner1}
        partner2={this.state.partner2}
        partner_s={this.state.partner_s}
        sub_id={this.state.sub_id}
        l_num={this.state.l_num}
        r_num={this.state.r_num}
        l_prob={this.state.l_prob}
        r_prob={this.state.r_prob}
        bonus3={this.state.bonus3}
        bonus1={this.state.bonus1}
        bonus2={this.state.bonus2}
        repeat={this.repeat}
        clickLeft={this.clickLeft}
        clickRight={this.clickRight}
        handleNext={this.handleNext}
      />
    );
  };
}
