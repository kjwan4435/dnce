import React, { Component } from "react";
import styled from "styled-components";

const Finish = styled.div`
  padding: 20px;
  display: block;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
`;

const LinkCont = styled.div`
  padding: 40px;
  display: block;
  text-align: center;
`;

const Link = styled.a`
  width: 150px;
  padding: 15px 10px;
  background-color: #ffcc00;
  border-radius: 8px;
  border-style: none;
  color: black;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
`;

export default class extends Component {
  render = () => {
    return (
      <div>
        <Finish>Thnak you for participation!</Finish>
        <Finish>
          Please Click Behind Button, and fill the Questions Plz! (Last Step)
        </Finish>
        <LinkCont>
          <Link href="https://docs.google.com/forms/d/1jw5DbUYLqfGqPLm2yS_kTz3uDJRpV7cxDmbh6KOoYzA/edit?hl=ko">
            Qustionnaire
          </Link>
        </LinkCont>
        <Finish>When we ready to pay, we will send e-mail.</Finish>
        <Finish>Have a nice day! cheers!</Finish>
      </div>
    );
  };
}
