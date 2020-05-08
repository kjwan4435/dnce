import React, { Component } from "react";
import styled from "styled-components";

const Finish = styled.div`
  padding: 20px;
  display: block;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
`;

export default class extends Component {
  render = () => {
    return (
      <div>
        <Finish>Thnak you for participation!</Finish>
        <Finish>
          If you did alright, we will contact you soon regarding payment
        </Finish>
        <Finish>When we ready to pay, we well send e-mail</Finish>
        <Finish>Have a nice day! cheers!</Finish>
      </div>
    );
  };
}
