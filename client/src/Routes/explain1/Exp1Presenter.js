import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import leftimage from "../../images/lottery_png/h20_p100.png";
import rightimage from "../../images/lottery_png/h34_p25.png";
import leftimage2 from "../../images/lottery_png/h13_p100.png";
import rightimage2 from "../../images/lottery_png/h23_p75.png";
import middle from "../../images/focus_I.png";

const Container = styled.div`
  padding: 20px;
  line-height: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageCont = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const LeftImg = styled.div`
  width: 250px;
  height: 250px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${leftimage});
`;
const RightImg = styled.div`
  width: 250px;
  height: 250px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${rightimage});
`;
const LeftImg2 = styled.div`
  width: 250px;
  height: 250px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${leftimage2});
`;
const RightImg2 = styled.div`
  width: 250px;
  height: 250px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${rightimage2});
`;
const Middle = styled.div`
  width: 100px;
  height: 100px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${middle});
`;

const Div = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
`;

const Inst = styled.div`
  padding: 18px;
  font-size: 24px;
  display: block;
  color: black;
  font-weight: 600;
  text-align: center;
  width: 100%;
  line-height: 40px;
`;

const GameInfo = styled.div`
  padding: 18px;
  font-size: 20px;
  display: block;
  color: rgb(68, 114, 196);
  font-weight: 600;
  text-align: center;
  width: 100%;
  line-height: 40px;
`;

const ButtonContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const Button = styled.button`
  padding: 10px 15px;
  margin: 0px 20px;
  border-radius: 8px;
  border-style: none;
  color: rgb(68, 114, 196);
  text-align: center;
  font-size: 20px;
  font-weight: 900;
  box-shadow: 0px 1px 5px 2px rgba(68, 114, 196, 0.4);
`;

const Exp1Presenter = ({ repeat, handleNext, clickLeft, clickRight }) => (
  <Container>
    <Div id="1">
      <ImageCont>
        <LeftImg className="left"></LeftImg>
        <Middle></Middle>
        <RightImg className="right"></RightImg>
      </ImageCont>
      <GameInfo>
        위 그림과 같이 화면에 나타나는 두 가지 복권 중 하나를 선택하게 됩니다.
        <br></br>
      </GameInfo>
      <ButtonContainer>
        <Button onClick={handleNext}> 이해했습니다. </Button>
      </ButtonContainer>
    </Div>
    <Div id="2">
      <Inst> 연습을 한 번 해보겠습니다. </Inst>
      <GameInfo>
        파란색 안내문은 본 게임에서는 나타나지 않습니다.
        <br></br>
      </GameInfo>
      <ButtonContainer>
        <Button onClick={handleNext}> 연습시작 </Button>
      </ButtonContainer>
    </Div>
    <Div id="3">
      <ImageCont>
        <LeftImg onClick={clickLeft} className="left"></LeftImg>
        <Middle></Middle>
        <RightImg className="right"></RightImg>
      </ImageCont>
      <GameInfo>
        왼쪽 복권을 클릭해보세요.
        <br></br>
      </GameInfo>
    </Div>
    <Div id="4">
      <ImageCont>
        <LeftImg className="left"></LeftImg>
        <Middle></Middle>
        <RightImg className="right"></RightImg>
      </ImageCont>
      <GameInfo>
        이제 아래의 다음 버튼을 누르면 선택이 확정되고 <br></br>
        당신은 100%의 확률로 20 포인트를 받을 수 있습니다.
        <br></br>
      </GameInfo>
      <ButtonContainer>
        <Button onClick={handleNext}> 다음 </Button>
      </ButtonContainer>
    </Div>
    <Div id="5">
      <ImageCont>
        <LeftImg2 className="left"></LeftImg2>
        <Middle></Middle>
        <RightImg2 onClick={clickRight} className="right"></RightImg2>
      </ImageCont>
      <GameInfo>
        이번에는 오른쪽 복권을 클릭해보세요.
        <br></br>
      </GameInfo>
    </Div>
    <Div id="6">
      <ImageCont>
        <LeftImg2 className="left"></LeftImg2>
        <Middle></Middle>
        <RightImg2 className="right"></RightImg2>
      </ImageCont>
      <GameInfo>
        이제 아래의 다음 버튼을 누르면 선택이 확정되고<br></br>
        당신은 75%의 확률로 23 포인트를, 25%로 0포인트를 받을 수 있습니다.
        <br></br>
      </GameInfo>
      <ButtonContainer>
        <Button onClick={handleNext}> 다음 </Button>
      </ButtonContainer>
    </Div>
    <Div id="7">
      <Inst>
        연습이 끝났습니다.<br></br>본 게임에서는 연습과 같은 과정을 여러 번
        반복하게 됩니다.
      </Inst>
      <ButtonContainer>
        <Button onClick={handleNext}> 이해했습니다. </Button>
      </ButtonContainer>
    </Div>
    <Div id="8">
      <Inst>
        이번 게임의 보너스는 <br></br>
        선택하신 모든 복권들 중 <br></br>
        무작위로 결정된 하나의 포인트와 확률에 비례하여 결정됩니다.<br></br>
        <br></br>
        포인트를 많이 받을수록 보너스 금액이 커집니다!<br></br>
      </Inst>
      <ButtonContainer>
        <Button onClick={handleNext}> 이해했습니다. </Button>
      </ButtonContainer>
    </Div>
    <Div id="9">
      <Inst>
        여기까지가 첫 번째 게임에 대한 설명입니다<br></br>
        <br></br>
        이해하셨으면 ‘이해했습니다’ 버튼을 눌러주세요.<br></br>첫 번째 본 게임이
        곧 시작됩니다.<br></br>
      </Inst>
      <ButtonContainer>
        <Button onClick={repeat}> 설명문 다시 읽기. </Button>
        <Link to="/experiment1">
          <Button> 이해했습니다. </Button>
        </Link>
      </ButtonContainer>
    </Div>
  </Container>
);

export default Exp1Presenter;
