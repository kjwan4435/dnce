import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import middle from "../../images/focus_I.png";
import { urlencoded } from "body-parser";

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

const PeopleImg = styled.div`
  width: 160px;
  height: 160px;
  background-repeat: no-repeat;
  background-size: cover;
`;
const PeopleImg2 = styled.div`
  width: 160px;
  height: 160px;
  background-repeat: no-repeat;
  background-size: cover;
  border: 5px solid black;
`;

const LeftImg = styled.div`
  width: 250px;
  height: 250px;
  background-repeat: no-repeat;
  background-size: cover;
`;
const RightImg = styled.div`
  width: 250px;
  height: 250px;
  background-repeat: no-repeat;
  background-size: cover;
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

const Exp1Presenter = ({
  l_num,
  r_num,
  l_prob,
  r_prob,
  handleNext,
  clickLeft,
  clickRight,
  setCharBorder,
  clickPeople1,
  clickPeople2,
  clickPeople3,
  clickPeople4,
  clickPeople5,
  clickPeople6
}) => {
  const left_image = {
    backgroundImage: `url(${require(`../../images/lottery_png/h${l_num}_p${
      l_prob * 100
    }.png`)})`
  };
  const right_image = {
    backgroundImage: `url(${require(`../../images/lottery_png/h${r_num}_p${
      r_prob * 100
    }.png`)})`
  };
  const people1 = {
    backgroundImage: `url(${require(`../../images/avatars/instruction/avataaars_inst1.png`)})`
  };
  const people2 = {
    backgroundImage: `url(${require(`../../images/avatars/instruction/avataaars_inst2.png`)})`
  };
  const people3 = {
    backgroundImage: `url(${require(`../../images/avatars/instruction/avataaars_inst3.png`)})`
  };
  const people4 = {
    backgroundImage: `url(${require(`../../images/avatars/instruction/avataaars_inst4.png`)})`
  };
  const people5 = {
    backgroundImage: `url(${require(`../../images/avatars/instruction/avataaars_inst5.png`)})`
  };
  const people6 = {
    backgroundImage: `url(${require(`../../images/avatars/instruction/avataaars_inst6.png`)})`
  };
  return (
    <Container>
      <Div id="0">
        <Inst>
          지금부터 두 번째 복권 게임을 시작합니다.
          <br></br>
        </Inst>
      </Div>
      <Div id="1">
        <Inst>게임에 사용될 자신의 캐릭터를 선택해 주세요!</Inst>
        <ImageCont>
          <PeopleImg
            onClick={clickPeople1}
            className="people1"
            style={people1}
          ></PeopleImg>
          <PeopleImg
            onClick={clickPeople2}
            className="people2"
            style={people2}
          ></PeopleImg>
          <PeopleImg
            onClick={clickPeople3}
            className="people3"
            style={people3}
          ></PeopleImg>
          <PeopleImg
            onClick={clickPeople4}
            className="people4"
            style={people4}
          ></PeopleImg>
          <PeopleImg
            onClick={clickPeople5}
            className="people5"
            style={people5}
          ></PeopleImg>
          <PeopleImg
            onClick={clickPeople6}
            className="people6"
            style={people6}
          ></PeopleImg>
        </ImageCont>
      </Div>
      <Div id="2">
        <Inst>게임을 함께 할 파트너들을 기다리고 있습니다</Inst>
        <ImageCont>
          <PeopleImg className="people1" style={people1}></PeopleImg>
          <PeopleImg className="people2" style={people2}></PeopleImg>
          <PeopleImg className="people3" style={people3}></PeopleImg>
          <PeopleImg className="people4" style={people4}></PeopleImg>
          <PeopleImg className="people5" style={people5}></PeopleImg>
          <PeopleImg className="people6" style={people6}></PeopleImg>
        </ImageCont>
      </Div>
      <Div id="7">
        <Inst>파트너들을 찾았습니다.</Inst>
        <ImageCont>
          <PeopleImg2 className="people1" style={people1}></PeopleImg2>
          <PeopleImg2 className="people2" style={people2}></PeopleImg2>
          <PeopleImg className="people3" style={people3}></PeopleImg>
          <PeopleImg className="people4" style={people4}></PeopleImg>
          <PeopleImg className="people5" style={people5}></PeopleImg>
          <PeopleImg className="people6" style={people6}></PeopleImg>
        </ImageCont>
        <GameInfo>
          검은색 테두리로 표시된 두 명이 파트너가 되었습니다.
          <br></br>
        </GameInfo>
        <ButtonContainer>
          <Button onClick={handleNext}> 이해했습니다. </Button>
        </ButtonContainer>
      </Div>
      <Div id="8">
        <Inst>파트너가 입장했습니다.</Inst>
        <ImageCont>
          <PeopleImg className="people2" style={people2}></PeopleImg>
          <PeopleImg className="people1" style={people1}></PeopleImg>
        </ImageCont>
        <GameInfo>
          파트너들이 게임에 입장하여 파트너 1, 파트너 2로 결정되었습니다
          <br></br>
        </GameInfo>
        <ButtonContainer>
          <Button onClick={handleNext}> 이해했습니다. </Button>
        </ButtonContainer>
      </Div>
      <Div id="1">
        <ImageCont>
          <LeftImg
            onClick={clickLeft}
            className="left"
            style={left_image}
          ></LeftImg>
          <Middle></Middle>
          <RightImg
            onClick={clickRight}
            className="right"
            style={right_image}
          ></RightImg>
        </ImageCont>
        <ButtonContainer>
          <Button onClick={handleNext}> 다음 </Button>
        </ButtonContainer>
      </Div>
      <Div id="2">
        <Inst>
          이번 선택들로 받을 보너스금액이<br></br>
          결정되었습니다.<br></br>
          <br></br>
          최종 보너스금액은 모든 실험이 종료된 후 알려드립니다.<br></br>
        </Inst>
        <ButtonContainer>
          <Link to="/explain2">
            <Button> 확인 </Button>
          </Link>
        </ButtonContainer>
      </Div>
    </Container>
  );
};

export default Exp1Presenter;
