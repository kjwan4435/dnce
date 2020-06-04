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
  padding: 50px;
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
  width: 400px;
  height: 400px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${leftimage});
`;
const RightImg = styled.div`
  width: 400px;
  height: 400px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${rightimage});
`;
const LeftImg2 = styled.div`
  width: 400px;
  height: 400px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${leftimage2});
`;
const RightImg2 = styled.div`
  width: 400px;
  height: 400px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${rightimage2});
`;
const Middle = styled.div`
  width: 100px;
  height: 100px;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 10px;
`;

const Div = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
`;

const Inst = styled.div`
  padding: 18px;
  font-size: 30px;
  display: block;
  color: black;
  font-weight: 600;
  text-align: center;
  width: 100%;
  line-height: 50px;
`;

const GameInfo = styled.div`
  padding: 18px;
  font-size: 25px;
  display: block;
  color: rgb(68, 114, 196);
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
  margin: 0px 30px;
  border-radius: 8px;
  border-style: none;
  color: rgb(68, 114, 196);
  text-align: center;
  font-size: 25px;
  font-weight: 900;
  box-shadow: 0px 1px 5px 2px rgba(68, 114, 196, 0.4);
`;

const Exp1Presenter = ({
  repeat,
  handleNext,
  clickLeft,
  clickRight,
  clickPeople
}) => {
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
      <Div id="1">
        <Inst>
          이제 곧 두 번째 복권 게임이 시작됩니다.<br></br>
          <br></br>두 번째 복권 게임도 선택에 따라 추가로 보너스를 <br></br>
          받을 수 있는 게임입니다.<br></br>
          게임에 대한 설명을 읽고 신중하게 선택해 주세요.<br></br>
        </Inst>
        <ButtonContainer>
          <Button onClick={handleNext}> 실험 설명 시작 </Button>
        </ButtonContainer>
      </Div>
      <Div id="2">
        <Inst>
          이번 게임은 두 명의 파트너와 함께 진행됩니다.<br></br>이 파트너들 또한
          귀하와 같이 복권 게임에 참여했던 분들입니다.<br></br>
          <br></br>
          이번 게임의 목표는 파트너들이 각자 이전 게임에서 <br></br>어떤 복권을
          골랐을지 맞히는 것입니다.<br></br>
          많이 맞힐수록 더 많은 보너스를 받을 수 있습니다.<br></br>
        </Inst>
        <ButtonContainer>
          <Button onClick={handleNext}> 실험 설명 시작 </Button>
        </ButtonContainer>
      </Div>
      <Div id="3">
        <Inst>연습을 한 번 해보겠습니다.</Inst>
        <GameInfo>파란색 안내문은 본 게임에서는 나타나지 않습니다.</GameInfo>
        <ButtonContainer>
          <Button onClick={handleNext}> 연습 시작 </Button>
        </ButtonContainer>
      </Div>
      <Div id="4">
        <Inst>게임에 사용될 자신의 캐릭터를 선택해 주세요!</Inst>
        <ImageCont>
          <PeopleImg className="people1" style={people1}></PeopleImg>
          <PeopleImg className="people2" style={people2}></PeopleImg>
          <PeopleImg className="people3" style={people3}></PeopleImg>
          <PeopleImg className="people4" style={people4}></PeopleImg>
          <PeopleImg className="people5" style={people5}></PeopleImg>
          <PeopleImg
            onClick={clickPeople}
            className="people6"
            style={people6}
          ></PeopleImg>
        </ImageCont>
        <GameInfo>
          실험 시작 전 귀하의 캐릭터를 정하게 됩니다.<br></br>
          마지막 캐릭터를 클릭해보세요.
        </GameInfo>
      </Div>
      <Div id="5">
        <Inst>게임에 사용될 자신의 캐릭터를 선택해 주세요!</Inst>
        <ImageCont>
          <PeopleImg className="people1" style={people1}></PeopleImg>
          <PeopleImg className="people2" style={people2}></PeopleImg>
          <PeopleImg className="people3" style={people3}></PeopleImg>
          <PeopleImg className="people4" style={people4}></PeopleImg>
          <PeopleImg className="people5" style={people5}></PeopleImg>
          <PeopleImg className="people6" style={people6}></PeopleImg>
        </ImageCont>
        <GameInfo>
          선택 버튼을 클릭하면 클릭 된 캐릭터가 <br></br>
          귀하의 캐릭터로 최종 결정됩니다.
        </GameInfo>
        <ButtonContainer>
          <Button onClick={handleNext}> 선택 </Button>
        </ButtonContainer>
      </Div>
      <Div id="6">
        <Inst>게임을 함께 할 파트너들을 기다리고 있습니다</Inst>
        <ImageCont>
          <PeopleImg className="people1" style={people1}></PeopleImg>
          <PeopleImg className="people2" style={people2}></PeopleImg>
          <PeopleImg className="people3" style={people3}></PeopleImg>
          <PeopleImg className="people4" style={people4}></PeopleImg>
          <PeopleImg className="people5" style={people5}></PeopleImg>
          <PeopleImg className="people6" style={people6}></PeopleImg>
        </ImageCont>
        <GameInfo>
          게임을 함께할 파트너가 입장할 때까지 기다려주시면 됩니다. <br></br>
        </GameInfo>
        <ButtonContainer>
          <Button onClick={handleNext}> 이해했습니다. </Button>
        </ButtonContainer>
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
      <Div id="9">
        <Inst>
          지금부터는 파트너가 어떤 복권을<br></br>선택했는지 맞혀 주세요.
          <br></br>
          <br></br>곧 게임을 시작합니다.<br></br>
        </Inst>
        <GameInfo>
          이 화면이 나타난 이후에 본 게임이 시작됩니다.
          <br></br>
        </GameInfo>
        <ButtonContainer>
          <Button onClick={handleNext}> 이해했습니다. </Button>
        </ButtonContainer>
      </Div>
      <Div id="10">
        <ImageCont>
          <PeopleImg className="people2" style={people2}></PeopleImg>
        </ImageCont>
        <Inst>
          파트너 1이 어떤 복권을 선택했을 지 맞혀주세요
          <br></br>
        </Inst>
        <GameInfo>
          파트너의 선택을 맞히기 전 <br></br>
          어떤 파트너에 대해 맞히면 되는지를 파트너의 캐릭터를 통해
          알려드립니다.
          <br></br>
        </GameInfo>
        <ButtonContainer>
          <Button onClick={handleNext}> 이해했습니다. </Button>
        </ButtonContainer>
      </Div>
      <Div id="11">
        <ImageCont>
          <LeftImg onClick={clickLeft} className="left"></LeftImg>
          <Middle style={people2}></Middle>
          <RightImg className="right"></RightImg>
        </ImageCont>
        <GameInfo>
          두 복권 중 파트너 1이 어떤 것을 선택했는지 고르시면 됩니다.<br></br>
          왼쪽 복권을 클릭해보세요<br></br>
        </GameInfo>
      </Div>
      <Div id="12">
        <ImageCont>
          <LeftImg className="left"></LeftImg>
          <Middle style={people2}></Middle>
          <RightImg className="right"></RightImg>
        </ImageCont>
        <GameInfo>
          이제 아래의 다음 버튼을 누르면 선택이 확정되고 <br></br>
          실제로 파트너가 선택한 것이 무엇인지 정답을 확인 할 수 있습니다.
          <br></br>
        </GameInfo>
        <ButtonContainer>
          <Button onClick={handleNext}> 다음 </Button>
        </ButtonContainer>
      </Div>
      <Div id="13">
        <ImageCont>
          <LeftImg
            className="left"
            style={{ outline: "10px solid lightgreen" }}
          ></LeftImg>
          <Middle style={people2}></Middle>
          <RightImg className="right"></RightImg>
        </ImageCont>
        <GameInfo>
          파트너의 실제 선택이 초록색 박스로 나타납니다.
          <br></br>
          이번에는 파트너의 선택을 맞혔습니다.
          <br></br>
        </GameInfo>
        <ButtonContainer>
          <Button onClick={handleNext}> 이해했습니다. </Button>
        </ButtonContainer>
      </Div>
      <Div id="14">
        <ImageCont>
          <PeopleImg className="people1" style={people1}></PeopleImg>
        </ImageCont>
        <Inst>
          파트너 2가 어떤 복권을 선택했을 지 맞혀주세요
          <br></br>
        </Inst>
        <GameInfo>
          이번에는 파트너 2가 어떤 복권을 선택 했는지 맞히면 됩니다.
          <br></br>
        </GameInfo>
        <ButtonContainer>
          <Button onClick={handleNext}> 이해했습니다. </Button>
        </ButtonContainer>
      </Div>
      <Div id="15">
        <ImageCont>
          <LeftImg onClick={clickLeft} className="left"></LeftImg>
          <Middle style={people1}></Middle>
          <RightImg className="right"></RightImg>
        </ImageCont>
        <GameInfo>
          두 복권 중 파트너 2가 어떤 것을 선택했는지 고르시면 됩니다.<br></br>
          왼쪽 복권을 클릭해보세요<br></br>
        </GameInfo>
      </Div>
      <Div id="16">
        <ImageCont>
          <LeftImg className="left"></LeftImg>
          <Middle style={people1}></Middle>
          <RightImg className="right"></RightImg>
        </ImageCont>
        <GameInfo>
          이제 아래의 다음 버튼을 누르면 선택이 확정되고 <br></br>
          실제로 파트너가 선택한 것이 무엇인지 정답을 확인 할 수 있습니다.
          <br></br>
        </GameInfo>
        <ButtonContainer>
          <Button onClick={handleNext}> 다음 </Button>
        </ButtonContainer>
      </Div>
      <Div id="17">
        <ImageCont>
          <LeftImg className="left"></LeftImg>
          <Middle style={people1}></Middle>
          <RightImg
            className="right"
            style={{ outline: "10px solid lightgreen" }}
          ></RightImg>
        </ImageCont>
        <GameInfo>
          파트너의 실제 선택이 초록색 박스로 나타납니다.
          <br></br>
          이번에는 파트너의 선택을 맞히지 못했습니다.
          <br></br>
        </GameInfo>
        <ButtonContainer>
          <Button onClick={handleNext}> 이해했습니다. </Button>
        </ButtonContainer>
      </Div>
      <Div id="18">
        <Inst>
          파트너가 어떤 복권을 선택했는지 맞혀 주세요.<br></br>
          지금부터는 정답을 알려주지 않습니다.
        </Inst>
        <GameInfo>
          게임의 후반부에는 파트너의 실제 선택을 알려주지 않는 게임이
          진행됩니다.
          <br></br>
        </GameInfo>
        <ButtonContainer>
          <Button onClick={handleNext}> 이해했습니다. </Button>
        </ButtonContainer>
      </Div>
    </Container>
  );
};

export default Exp1Presenter;
