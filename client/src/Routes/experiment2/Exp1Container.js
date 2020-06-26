import React, { Component } from "react";
import Exp1Presenter from "./Exp1Presenter";
import axios from "axios";
import qs from "qs";

export default class extends Component {
  state = {
    sub_id: "",
    step: 0,
    step1: 0,
    step2: 0,
    step3: 0,
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
    bonus1: 0,
    people1: 0,
    people2: 0,
    people3: 0,
    people4: 0,
    people5: 0,
    people6: 0,
    partner1: 1,
    partner2: 1,
    partner: 1,
    partner_c: -1,
    question: [],
    predict: -100,
    time_predict: 0,
    character: 0
  };
  enterPeople = async () => {
    let partner = await Math.floor(Math.random() * 2);
    let partner_s = await Math.floor(Math.random() * 2);
    if (partner === 0) {
      this.setState({
        partner1: 7 + partner_s,
        partner2: 8 - partner_s
      });
    } else if (partner === 1) {
      this.setState({
        partner1: 9 + partner_s,
        partner2: 10 - partner_s
      });
    }
    await this.handleNext();
  };

  setCharBorder = async () => {
    let people1 = await document.getElementsByClassName("people1");
    let people2 = await document.getElementsByClassName("people2");
    let people3 = await document.getElementsByClassName("people3");
    let people4 = await document.getElementsByClassName("people4");
    let people5 = await document.getElementsByClassName("people5");
    let people6 = await document.getElementsByClassName("people6");

    if (this.state.people1 === 1) {
      await this.setState({ character: 1 });
      for (let i = 0; i < people1.length; i++) {
        people1[i].style.border = "5px solid green";
      }
    } else if (this.state.people2 === 1) {
      await this.setState({ character: 2 });
      for (let i = 0; i < people2.length; i++) {
        people2[i].style.border = "5px solid green";
      }
    } else if (this.state.people3 === 1) {
      await this.setState({ character: 3 });
      for (let i = 0; i < people3.length; i++) {
        people3[i].style.border = "5px solid green";
      }
    } else if (this.state.people4 === 1) {
      await this.setState({ character: 4 });
      for (let i = 0; i < people4.length; i++) {
        people4[i].style.border = "5px solid green";
      }
    } else if (this.state.people5 === 1) {
      await this.setState({ character: 5 });
      for (let i = 0; i < people5.length; i++) {
        people5[i].style.border = "5px solid green";
      }
    } else if (this.state.people6 === 1) {
      await this.setState({ character: 6 });
      for (let i = 0; i < people6.length; i++) {
        people6[i].style.border = "5px solid green";
      }
    }
  };

  clickPeople1 = async () => {
    await this.setState({ people1: 1 });
    await this.setCharBorder();
    await this.handleNext();
  };
  clickPeople2 = async () => {
    await this.setState({ people2: 1 });
    await this.setCharBorder();
    await this.handleNext();
  };
  clickPeople3 = async () => {
    await this.setState({ people3: 1 });
    await this.setCharBorder();
    await this.handleNext();
  };
  clickPeople4 = async () => {
    await this.setState({ people4: 1 });
    await this.setCharBorder();
    await this.handleNext();
  };
  clickPeople5 = async () => {
    await this.setState({ people5: 1 });
    await this.setCharBorder();
    await this.handleNext();
  };
  clickPeople6 = async () => {
    await this.setState({ people6: 1 });
    await this.setCharBorder();
    await this.handleNext();
  };

  setBorder = async () => {
    let leftArray = await document.getElementsByClassName("left");
    let rightArray = await document.getElementsByClassName("right");
    if (this.state.lclick === 1) {
      for (let i = 0; i < leftArray.length; i++) {
        leftArray[i].style.border = "5px solid";
      }
      for (let i = 0; i < rightArray.length; i++) {
        rightArray[i].style.border = "0px";
      }
    } else if (this.state.rclick === 1) {
      for (let i = 0; i < leftArray.length; i++) {
        leftArray[i].style.border = "0px";
      }
      for (let i = 0; i < rightArray.length; i++) {
        rightArray[i].style.border = "5px solid";
      }
    } else {
      for (let i = 0; i < leftArray.length; i++) {
        leftArray[i].style.border = "0px";
      }
      for (let i = 0; i < rightArray.length; i++) {
        rightArray[i].style.border = "0px";
      }
    }
  };

  setAnswerBorder = async () => {
    let leftArray = await document.getElementsByClassName("left");
    let rightArray = await document.getElementsByClassName("right");
    if (this.state.partner_c === 0) {
      for (let i = 0; i < leftArray.length; i++) {
        leftArray[i].style.outline = "10px solid lightgreen";
      }
      for (let i = 0; i < rightArray.length; i++) {
        rightArray[i].style.outline = "0px";
      }
    } else if (this.state.partner_c === 1) {
      for (let i = 0; i < leftArray.length; i++) {
        leftArray[i].style.outline = "0px";
      }
      for (let i = 0; i < rightArray.length; i++) {
        rightArray[i].style.outline = "10px solid lightgreen";
      }
    } else {
      for (let i = 0; i < leftArray.length; i++) {
        leftArray[i].style.outline = "0px";
      }
      for (let i = 0; i < rightArray.length; i++) {
        rightArray[i].style.outline = "0px";
      }
    }
  };

  hideComponent = () => {
    document.getElementById("hideSubmit").style.display = "none";
    document.getElementById("loader").style.display = "flex";
  };

  showComponent = () => {
    document.getElementById("hideSubmit").style.display = "flex";
    document.getElementById("loader").style.display = "none";
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
    document.getElementById("hideNext1").style.display = "flex";
    document.getElementById(`hide2Next2`).style.display = "flex";
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
    document.getElementById("hideNext1").style.display = "flex";
    document.getElementById(`hide2Next2`).style.display = "flex";
  };

  sleep = (delay) => {
    let start = new Date().getTime();
    while (new Date().getTime() < start + delay);
  };

  bonusHandler = async () => {
    if (this.state.partner_c === 0 && this.state.lclick === 1) {
      this.setState({ bonus: this.state.bonus + 5 });
    } else if (this.state.partner_c === 1 && this.state.rclick === 1) {
      this.setState({ bonus: this.state.bonus + 5 });
    }
  };

  setAnswer = async () => {
    const answer = {
      sub_id: this.state.sub_id,
      trial: this.state.step1,
      l_num: this.state.l_num,
      l_prob: this.state.l_prob,
      r_num: this.state.r_num,
      r_prob: this.state.r_prob,
      partner: this.state.partner,
      partner1: this.state.partner1,
      partner2: this.state.partner2,
      partner_c: this.state.partner_c,
      l_click: this.state.lclick,
      r_click: this.state.rclick,
      time_click: this.state.time_click,
      time_click_array: this.state.time_click_array,
      time_next: this.state.time_next,
      bonus: this.state.bonus,
      character: this.state.character
    };
    return answer;
  };

  setAnswer2 = async () => {
    const answer = {
      sub_id: this.state.sub_id,
      trial: this.state.step2,
      l_num: this.state.l_num,
      l_prob: this.state.l_prob,
      r_num: this.state.r_num,
      r_prob: this.state.r_prob,
      partner: this.state.partner,
      partner1: this.state.partner1,
      partner2: this.state.partner2,
      partner_c: this.state.partner_c,
      l_click: this.state.lclick,
      r_click: this.state.rclick,
      time_click: this.state.time_click,
      time_click_array: this.state.time_click_array,
      time_next: this.state.time_next,
      bonus: this.state.bonus,
      predict: this.state.predict,
      time_predict: this.state.time_predict
    };
    return answer;
  };

  setAnswer3 = async () => {
    const answer = {
      sub_id: this.state.sub_id,
      trial: this.state.step3,
      partner: this.state.partner,
      partner1: this.state.partner1,
      partner2: this.state.partner2,
      time_next: this.state.time_next,
      predict: this.state.predict,
      question: this.state.question[Math.floor((this.state.step3 - 1) / 2)]
        .question
    };
    return answer;
  };

  showAnswer = async () => {
    this.setState({
      partner_c: this.state.data[this.state.step1 - 1][this.state.column[6]]
    });
    await this.setAnswerBorder();
  };

  showAnswer2 = async () => {
    this.setState({
      partner_c: this.state.data[this.state.step2 + 40 - 1][
        this.state.column[6]
      ]
    });
    await this.setAnswerBorder();
  };

  handleNext = async () => {
    await this.setState({
      step: this.state.step + 1,
      lclick: 0,
      rclick: 0,
      partner_c: -1,
      time_click_array: []
    });
    this.sleep(500);
    this.setBorder();
    this.setAnswerBorder();

    if (this.state.step === 1) {
      document.getElementById(`${this.state.step - 1}`).style.display = "none";
      document.getElementById(`${this.state.step}`).style.display = "flex";
    }
    if (this.state.step === 2) {
      document.getElementById(`${this.state.step - 1}`).style.display = "none";
      document.getElementById(`${this.state.step}`).style.display = "flex";
      setTimeout(this.enterPeople, 2000);
    }
    if (
      this.state.step === 3 ||
      this.state.step === 4 ||
      this.state.step === 5
    ) {
      document.getElementById(`${this.state.step - 1}`).style.display = "none";
      document.getElementById(`${this.state.step}`).style.display = "flex";

      setTimeout(this.handleNext, 2000);
    }
    if (this.state.step === 6) {
      document.getElementById(`${this.state.step - 1}`).style.display = "none";
      document.getElementById("hideNext1").style.display = "none";
      this.handle1Next();
    }
    if (this.state.step === 7) {
      document.getElementById(`6`).style.display = "flex";
      setTimeout(this.handleNext, 2000);
    }
    if (this.state.step === 8) {
      document.getElementById(`6`).style.display = "none";
      this.handle2Next();
    }
    if (this.state.step === 9) {
      document.getElementById(`7`).style.display = "flex";
      setTimeout(this.handleNext, 2000);
    }
    if (this.state.step === 10) {
      document.getElementById(`7`).style.display = "none";
      this.handle3Next();
    }
    if (this.state.step === 11 && this.state.bonus / 3 >= 50) {
      document.getElementById(`8`).style.display = "flex";
    } else if (this.state.step === 11 && this.state.bonus / 3 < 50) {
      document.getElementById(`9`).style.display = "flex";
      try {
        const bonus1 = await axios.get(
          `/answers/exp/bonus/${this.state.sub_id}`
        );
        await this.setState({
          bonus1: bonus1.data.bonus
        });
      } catch (error) {
        console.error(error);
      }
    }
    if (this.state.step === 12) {
      document.getElementById(`9`).style.display = "none";
      document.getElementById(`10`).style.display = "flex";
    }
    if (this.state.step === 13) {
      document.getElementById(`10`).style.display = "none";
      document.getElementById(`11`).style.display = "flex";
    }
  };

  setPartner = async () => {
    let partner = this.state.data[this.state.step1 - 1][this.state.column[5]];
    if (partner === 1) {
      await this.setState({
        partner: this.state.partner1
      });
    } else if (partner === 2) {
      await this.setState({
        partner: this.state.partner2
      });
    }
  };

  setPartner2 = async () => {
    let partner = this.state.data[this.state.step2 - 1 + 40][
      this.state.column[5]
    ];
    if (partner === 1) {
      await this.setState({
        partner: this.state.partner1
      });
    } else if (partner === 2) {
      await this.setState({
        partner: this.state.partner2
      });
    }
  };

  showComponent1 = async () => {
    document.getElementById(`1-1`).style.display = "none";
    document.getElementById(`1-2`).style.display = "flex";
  };
  showComponent2 = async () => {
    document.getElementById(`2-1`).style.display = "none";
    document.getElementById(`2-2`).style.display = "flex";
  };
  showComponent3 = async () => {
    document.getElementById(`3-1`).style.display = "none";
    document.getElementById(`3-2`).style.display = "flex";
  };
  showComponent4 = async () => {
    document.getElementById(`3-3`).style.display = "none";
    document.getElementById(`3-4`).style.display = "flex";
  };
  handle2Next2 = async () => {
    if (this.state.step2 > 0) {
      const time_next = +new Date();
      await this.setState({
        time_next: time_next - this.state.time_show
      });
      await this.showAnswer();
      await this.bonusHandler();
    }
    document.getElementById(`2-2`).style.display = "none";
    document.getElementById(`2-3`).style.display = "flex";
  };

  handle1Next = async () => {
    if (this.state.step1 > 0) {
      document.getElementById("hideNext1").style.display = "none";
      document.getElementById("loader1").style.display = "flex";
      const time_next = +new Date();
      await this.setState({
        time_next: time_next - this.state.time_show
      });
      await this.showAnswer();
      await this.bonusHandler();
      const answer = await this.setAnswer();
      const res = await axios.post(`/answers/exp2`, qs.stringify(answer));
      console.log(res.data);
      document.getElementById("loader1").style.display = "none";
    }
    await this.setState({
      step1: this.state.step1 + 1,
      lclick: 0,
      rclick: 0,
      partner_c: -1,
      time_click_array: []
    });
    await this.setBorder();
    await this.setAnswerBorder();
    this.sleep(2000);

    if (this.state.step1 > 0 && this.state.step1 < 41) {
      document.getElementById(`1-1`).style.display = "flex";
      document.getElementById(`1-2`).style.display = "none";
      await setTimeout(this.showComponent1, 2000);
    }
    if (this.state.step1 === 41) {
      document.getElementById(`1-2`).style.display = "none";
      this.handleNext();
    }
    if (this.state.step1 > 0 && this.state.step1 < 41) {
      const l_num = this.state.data[this.state.step1 - 1][this.state.column[1]];
      const l_prob = this.state.data[this.state.step1 - 1][
        this.state.column[2]
      ];
      const r_num = this.state.data[this.state.step1 - 1][this.state.column[3]];
      const r_prob = this.state.data[this.state.step1 - 1][
        this.state.column[4]
      ];
      await this.setPartner();
      await this.setState({
        l_num,
        l_prob,
        r_num,
        r_prob
      });
      const time_show = +new Date();
      this.setState({
        time_show: time_show
      });
    }
  };

  handle2Next = async () => {
    if (this.state.step2 > 0) {
      document.getElementById("hideNext2").style.display = "none";
      document.getElementById("loader2").style.display = "flex";
      let output = document.getElementById("demo");
      await this.setState({ predict: output.innerHTML });
      const time_next = +new Date();
      await this.setState({
        time_predict: time_next - this.state.time_show
      });
      await this.showAnswer2();
      await this.bonusHandler();
      const answer = await this.setAnswer2();
      const res = await axios.post(`/answers/exp2-2`, qs.stringify(answer));
      console.log(res.data);
      document.getElementById("hideNext2").style.display = "flex";
      document.getElementById("loader2").style.display = "none";
    }

    await this.setState({
      step2: this.state.step2 + 1,
      lclick: 0,
      rclick: 0,
      partner_c: -1,
      time_click_array: []
    });
    await this.setBorder();
    await this.setAnswerBorder();

    if (this.state.step2 > 0 && this.state.step2 < 21) {
      document.getElementById(`2-1`).style.display = "flex";
      document.getElementById(`2-3`).style.display = "none";
      document.getElementById(`hide2Next2`).style.display = "none";

      await this.setState({ predict: Math.floor(Math.random() * 10) + 1 });
      let slider = document.getElementById("myRange");
      let output = document.getElementById("demo");
      output.innerHTML = this.state.predict;
      slider.oninput = function () {
        output.innerHTML = this.value;
        slider.value = this.value;
      };

      await setTimeout(this.showComponent2, 2000);
    }
    if (this.state.step2 === 21) {
      document.getElementById(`2-3`).style.display = "none";
      this.handleNext();
    }
    if (this.state.step2 > 0 && this.state.step2 < 21) {
      const l_num = this.state.data[this.state.step2 - 1 + 40][
        this.state.column[1]
      ];
      const l_prob = this.state.data[this.state.step2 - 1 + 40][
        this.state.column[2]
      ];
      const r_num = this.state.data[this.state.step2 - 1 + 40][
        this.state.column[3]
      ];
      const r_prob = this.state.data[this.state.step2 - 1 + 40][
        this.state.column[4]
      ];
      await this.setPartner2();
      await this.setState({
        l_num,
        l_prob,
        r_num,
        r_prob
      });
      const time_show = +new Date();
      this.setState({
        time_show: time_show
      });
    }
  };

  handle3Next = async () => {
    if (this.state.step3 > 0 && this.state.step3 % 2 === 1) {
      document.getElementById("hideNext3").style.display = "none";
      document.getElementById("loader3").style.display = "flex";
      const time_next = +new Date();
      let output2 = document.getElementById("demo2");
      await this.setState({
        predict: output2.innerHTML,
        time_next: time_next - this.state.time_show,
        partner: this.state.partner1
      });
      const answer = await this.setAnswer3();
      const res = await axios.post(`/answers/exp2-3`, qs.stringify(answer));
      console.log(res.data);
      document.getElementById("hideNext3").style.display = "flex";
      document.getElementById("loader3").style.display = "none";
    } else if (this.state.step3 > 0 && this.state.step3 % 2 === 0) {
      document.getElementById("hideNext4").style.display = "none";
      document.getElementById("loader4").style.display = "flex";
      const time_next = +new Date();
      let output3 = document.getElementById("demo3");
      await this.setState({
        predict: output3.innerHTML,
        time_next: time_next - this.state.time_show,
        partner: this.state.partner2
      });
      const answer = await this.setAnswer3();
      const res = await axios.post(`/answers/exp2-3`, qs.stringify(answer));
      console.log(res.data);
      document.getElementById("hideNext4").style.display = "flex";
      document.getElementById("loader4").style.display = "none";
    }

    await this.setState({
      step3: this.state.step3 + 1,
      lclick: 0,
      rclick: 0,
      partner_c: -1,
      time_click_array: []
    });
    await this.setBorder();
    await this.setAnswerBorder();

    if (
      this.state.step3 > 0 &&
      this.state.step3 < 19 &&
      this.state.step3 % 2 === 1
    ) {
      document.getElementById(`3-1`).style.display = "flex";
      document.getElementById(`3-4`).style.display = "none";
      let quest = document.getElementById("question");
      quest.innerHTML = this.state.question[
        Math.floor((this.state.step3 - 1) / 2)
      ].question;

      await this.setState({ predict: Math.floor(Math.random() * 10) + 1 });
      let slider2 = document.getElementById("myRange2");
      let output2 = document.getElementById("demo2");
      output2.innerHTML = this.state.predict;
      slider2.oninput = function () {
        output2.innerHTML = this.value;
        slider2.value = this.value;
      };

      await setTimeout(this.showComponent3, 2000);
    } else if (
      this.state.step3 > 0 &&
      this.state.step3 < 19 &&
      this.state.step3 % 2 === 0
    ) {
      document.getElementById(`3-3`).style.display = "flex";
      document.getElementById(`3-2`).style.display = "none";
      let quest = document.getElementById("question2");
      quest.innerHTML = this.state.question[
        Math.floor((this.state.step3 - 1) / 2)
      ].question;

      await this.setState({ predict: Math.floor(Math.random() * 10) + 1 });
      let slider3 = document.getElementById("myRange3");
      let output3 = document.getElementById("demo3");
      output3.innerHTML = this.state.predict;
      slider3.oninput = function () {
        output3.innerHTML = this.value;
        slider3.value = this.value;
      };

      await setTimeout(this.showComponent4, 2000);
    }
    if (this.state.step3 === 19) {
      document.getElementById(`3-4`).style.display = "none";
      this.handleNext();
    }
    if (this.state.step3 > 0) {
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
      const result2 = await axios.get(`/exp/quest`);
      const data = result2.data;
      const sliced = data.slice(0, 8);
      const sorted_sliced = sliced.sort(function () {
        return 0.5 - Math.random();
      });
      const quest = sorted_sliced
        .slice(0, 4)
        .concat(data[8])
        .concat(sorted_sliced.slice(4));
      await this.setState({ question: quest });
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
      document.getElementById(`${this.state.step}`).style.display = "flex";
      await this.getExp(2);
      this.sleep(2000);
      const array = Object.keys(this.state.data[0]);
      await this.setState({ column: array });
      this.handleNext();
    }

    let slider2 = document.getElementById("myRange2");
    let output2 = document.getElementById("demo2");
    slider2.oninput = function () {
      output2.innerHTML = this.value;
      slider2.value = this.value;
    };

    let slider3 = document.getElementById("myRange3");
    let output3 = document.getElementById("demo3");
    slider3.oninput = function () {
      output3.innerHTML = this.value;
      slider3.value = this.value;
    };
  };

  render = () => {
    return (
      <Exp1Presenter
        sub_id={this.state.sub_id}
        l_num={this.state.l_num}
        r_num={this.state.r_num}
        l_prob={this.state.l_prob}
        r_prob={this.state.r_prob}
        partner={this.state.partner}
        partner1={this.state.partner1}
        partner2={this.state.partner2}
        bonus1={this.state.bonus1}
        bonus2={this.state.bonus}
        repeat={this.repeat}
        clickLeft={this.clickLeft}
        clickRight={this.clickRight}
        handleNext={this.handleNext}
        handle1Next={this.handle1Next}
        handle2Next={this.handle2Next}
        handle3Next={this.handle3Next}
        handle2Next2={this.handle2Next2}
        setCharBorder={this.setCharBorder}
        clickPeople1={this.clickPeople1}
        clickPeople2={this.clickPeople2}
        clickPeople3={this.clickPeople3}
        clickPeople4={this.clickPeople4}
        clickPeople5={this.clickPeople5}
        clickPeople6={this.clickPeople6}
        predict={this.state.predict}
      />
    );
  };
}
