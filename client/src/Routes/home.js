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
  font-size: 25px;
  display: block;
  color: black;
  font-weight: 600;
  text-align: center;
  width: 100%;
  line-height: 50px;
`;

const ButtonContainer = styled.div`
  padding: 30px;
  text-align: center;
`;

const Button = styled.button`
  padding: 10px 15px;
  border-radius: 8px;
  border-style: none;
  color: rgba(0, 0, 0, 0.9);
  text-align: center;
  font-size: 25px;
  font-weight: 900;
  box-shadow: 0px 1px 5px 2px rgba(140, 140, 140, 0.4);
`;

export default class extends Component {
  render = () => {
    return (
      <Container>
        <GameInfo>
          실험에 참가해주셔서 감사합니다. <br></br>
          <br></br>
          지금부터 선택에 따라 추가로 보너스 금액을 <br></br>
          받을 수 있는 복권 게임을 하게 됩니다. <br></br>
          게임에 대한 설명을 읽고 신중하게 선택해 주세요. <br></br>
        </GameInfo>
        <ButtonContainer>
          <Link to="/explain1">
            <Button> 실험 설명 시작 </Button>
          </Link>
        </ButtonContainer>
      </Container>
    );
  };
}
