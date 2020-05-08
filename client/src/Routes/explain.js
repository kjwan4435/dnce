import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GameInfo = styled.div`
  padding: 18px;
  font-size: 18px;
  display: block;
  text-align: center;
  width: 100%;
  line-height: 30px;
`;

const Mission = styled.div`
  padding: 10px;
  display: block;
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  color: #ffcc00;
`;

const ButtonContainer = styled.div`
  padding: 30px;
  text-align: center;
`;

const Start = styled.button`
  padding: 10px 15px;
  background-color: #ffcc00;
  border-radius: 8px;
  border-style: none;
  color: rgba(0, 0, 0, 0.9);
  text-align: center;
  font-size: 30px;
  font-weight: 900;
`;

const Extra = styled.div`
  margin-top: 10px;
  display: block;
  padding: 10px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 15px;
  line-height: 20px;
`;

export default class extends Component {
  render = () => {
    return (
      <Container>
        <Mission>
          The only thing you need to do is choose between "Go" and "Swerve"
        </Mission>
        <GameInfo>
          If only you choose "Go" and others choose "Swerve", you can get
          points.
          <br></br>
          However, if others also choose "Go", the people who choose "Go" will
          get severe penalty.
          <br></br>
          Meanwhile, if you choose "Swerve", you might get not severe but some
          penalty but there is no reward.
          <br></br> Also, You might be coward(chicken)
        </GameInfo>
        <Extra>
          If you choose "Go", and others also choose "Go" => you get -100,
          others also get -100 <br></br>
          If you choose "Go", and one choose "Go" and the other choose "Swerve"
          => "Go" people get -60, "Swerve": -20 <br></br>
          If you choose "Go", and others choose "Swerve" => you get +20, others
          get -20 <br></br>
          <br></br>
          If you choose "Swerve", and others also choose "Swerve" => All get 0
          points<br></br>
          If you choose "Swerve", and one choose "Go" and the other choose
          "Swerve" => "Go" people get +20, "Swerve" : -60 <br></br>
          If you choose "Swerve", and others choose "Go" => you get -20, others
          get -60 <br></br>
        </Extra>
        <ButtonContainer>
          <Link to="/questions">
            <Start> Let's Start</Start>
          </Link>
        </ButtonContainer>
      </Container>
    );
  };
}
