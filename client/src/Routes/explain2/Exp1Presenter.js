import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import leftimage from "../../images/lottery_png/h20_p100.png";
import rightimage from "../../images/lottery_png/h34_p25.png";

const Container = styled.div`
  padding: 20px;
  line-height: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Cont2 = styled.div`
  padding: 0;
  width: 100%;
  line-height: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 8px solid black;
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
  height: 180px;
  background-repeat: no-repeat;
  background-size: cover;
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
const Middle = styled.div`
  width: 120px;
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
  font-size: 24px;
  display: block;
  color: black;
  font-weight: 600;
  text-align: center;
  width: 100%;
  line-height: 40px;
`;
const Inst2 = styled.div`
  font-size: 15px;
  display: block;
  color: black;
  font-weight: 600;
  text-align: center;
  width: 100%;
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

const RangeCont = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const RangeInput = styled.input``;

const Exp1Presenter = ({
  sub_id,
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
  const partner1 = {
    backgroundImage: `url(${require(`../../images/avatars/instruction/partner1.png`)})`
  };
  const partner2 = {
    backgroundImage: `url(${require(`../../images/avatars/instruction/partner2.png`)})`
  };
  const partner1_small = {
    backgroundImage: `url(${require(`../../images/avatars/instruction/partner1_small.png`)})`
  };
  const partner2_small = {
    backgroundImage: `url(${require(`../../images/avatars/instruction/partner2_small.png`)})`
  };
  return (
    <Container>
      <Div id="1">
        <Inst>
          이제 곧 두 번째 복권 게임이 시작됩니다. <br />
          <br />
          두 번째 복권 게임도 선택에 따라 추가로 보너스를 <br />
          받을 수 있는 게임입니다. <br />
          게임에 대한 설명을 읽고 신중하게 선택해 주세요. <br />
        </Inst>
        <ButtonContainer>
          <Button onClick={handleNext}> 실험 설명 시작 </Button>
        </ButtonContainer>
      </Div>
      <Div id="2">
        <Inst>
          이번 게임은 두 명의 파트너와 함께 진행됩니다. <br />
          이 파트너들 또한 귀하와 같이 복권 게임에 참여했던 분들입니다. <br />
          <br />
          이번 게임의 목표는 파트너들이 각자 이전 게임에서 <br />
          어떤 복권을 골랐을지 맞히는 것입니다. <br />
          많이 맞힐수록 더 많은 보너스를 받을 수 있습니다. <br />
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
          실험 시작 전 귀하의 캐릭터를 정하게 됩니다. <br />
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
          선택 버튼을 클릭하면 클릭 된 캐릭터가 <br />
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
          게임을 함께할 파트너가 입장할 때까지 기다려주시면 됩니다. <br />
        </GameInfo>
        <ButtonContainer>
          <Button onClick={handleNext}> 이해했습니다. </Button>
        </ButtonContainer>
      </Div>
      <Div id="7">
        <Inst>
          파트너들이 입장하셨습니다. <br />
          <br />
          파트너가 어떤 캐릭터를 골랐는지는 <br />
          보여드리지 않습니다. <br />
        </Inst>
        <GameInfo>
          파트너들이 게임에 입장하시면 나타나는 안내문 입니다. <br />
        </GameInfo>
        <ButtonContainer>
          <Button onClick={handleNext}> 이해했습니다. </Button>
        </ButtonContainer>
      </Div>
      <Div id="8">
        <Inst>두 명의 파트너는 아래의 그림으로 구분하실 수 있습니다.</Inst>
        <ImageCont>
          <PeopleImg style={partner1}></PeopleImg>
          <PeopleImg style={partner2}></PeopleImg>
        </ImageCont>
        <GameInfo>
          파트너들이 게임에 입장하여 파트너 A, 파트너 B로 결정되었습니다 <br />
        </GameInfo>
        <ButtonContainer>
          <Button onClick={handleNext}> 이해했습니다. </Button>
        </ButtonContainer>
      </Div>
      <Div id="9">
        <Inst>
          지금부터는 파트너가 어떤 복권을 <br />
          선택했는지 맞혀 주세요. <br />
          <br />
          곧 게임을 시작합니다. <br />
        </Inst>
        <GameInfo>이 화면이 나타난 이후에 본 게임이 시작됩니다.</GameInfo>
        <ButtonContainer>
          <Button onClick={handleNext}> 이해했습니다. </Button>
        </ButtonContainer>
      </Div>
      <Div id="10">
        <ImageCont>
          <PeopleImg style={partner1}></PeopleImg>
        </ImageCont>
        <Inst>위의 파트너가 어떤 복권을 선택했을 지 맞혀주세요</Inst>
        <GameInfo>
          파트너의 선택을 맞히기 전 <br />
          어떤 파트너에 대해 맞히면 되는지를 파트너의 캐릭터를 통해
          알려드립니다. <br />
        </GameInfo>
        <ButtonContainer>
          <Button onClick={handleNext}> 이해했습니다. </Button>
        </ButtonContainer>
      </Div>
      <Div id="11">
        <Cont2>
          <ImageCont>
            <LeftImg onClick={clickLeft} className="left"></LeftImg>
            <Middle style={partner1_small}></Middle>
            <RightImg className="right"></RightImg>
          </ImageCont>
        </Cont2>
        <GameInfo>
          두 복권 중 파트너가 어떤 것을 선택했는지 고르시면 됩니다. <br />
          왼쪽 복권을 클릭해보세요. <br />
        </GameInfo>
      </Div>
      <Div id="12">
        <Cont2>
          <ImageCont>
            <LeftImg className="left"></LeftImg>
            <Middle style={partner1_small}></Middle>
            <RightImg className="right"></RightImg>
          </ImageCont>
        </Cont2>
        <GameInfo>
          이제 아래의 다음 버튼을 누르면 선택이 확정되고 <br />
          실제로 파트너가 선택한 것이 무엇인지 정답을 확인 할 수 있습니다.{" "}
          <br />
        </GameInfo>
        <ButtonContainer>
          <Button onClick={handleNext}> 다음 </Button>
        </ButtonContainer>
      </Div>
      <Div id="13">
        <Cont2>
          <ImageCont>
            <LeftImg
              className="left"
              style={{ outline: "10px solid lightgreen" }}
            ></LeftImg>
            <Middle style={partner1_small}></Middle>
            <RightImg className="right"></RightImg>
          </ImageCont>
        </Cont2>
        <GameInfo>
          파트너의 실제 선택이 초록색 박스로 나타납니다. <br />
          이번에는 파트너의 선택을 맞혔습니다. <br />
        </GameInfo>
        <ButtonContainer>
          <Button onClick={handleNext}> 이해했습니다. </Button>
        </ButtonContainer>
      </Div>
      <Div id="14">
        <ImageCont>
          <PeopleImg className="people1" style={partner2}></PeopleImg>
        </ImageCont>
        <Inst>
          위의 파트너가 어떤 복권을 선택했을 지 맞혀주세요. <br />
        </Inst>
        <GameInfo>
          이번에는 파트너가 어떤 복권을 선택 했는지 맞히면 됩니다. <br />
        </GameInfo>
        <ButtonContainer>
          <Button onClick={handleNext}> 이해했습니다. </Button>
        </ButtonContainer>
      </Div>
      <Div id="15">
        <Cont2>
          <ImageCont>
            <LeftImg onClick={clickLeft} className="left"></LeftImg>
            <Middle style={partner2_small}></Middle>
            <RightImg className="right"></RightImg>
          </ImageCont>
        </Cont2>
        <GameInfo>
          두 복권 중 파트너가 어떤 것을 선택했는지 고르시면 됩니다. <br />
          왼쪽 복권을 클릭해보세요. <br />
        </GameInfo>
      </Div>
      <Div id="16">
        <Cont2>
          <ImageCont>
            <LeftImg className="left"></LeftImg>
            <Middle style={partner2_small}></Middle>
            <RightImg className="right"></RightImg>
          </ImageCont>
        </Cont2>
        <GameInfo>
          이제 아래의 다음 버튼을 누르면 선택이 확정되고 <br />
          실제로 파트너가 선택한 것이 무엇인지 정답을 확인 할 수 있습니다.
          <br />
        </GameInfo>
        <ButtonContainer>
          <Button onClick={handleNext}> 다음 </Button>
        </ButtonContainer>
      </Div>
      <Div id="17">
        <Cont2>
          <ImageCont>
            <LeftImg className="left"></LeftImg>
            <Middle style={partner2_small}></Middle>
            <RightImg
              className="right"
              style={{ outline: "10px solid lightgreen" }}
            ></RightImg>
          </ImageCont>
        </Cont2>
        <GameInfo>
          파트너의 실제 선택이 초록색 박스로 나타납니다. <br />
          이번에는 파트너의 선택을 맞히지 못했습니다. <br />
        </GameInfo>
        <ButtonContainer>
          <Button onClick={handleNext}> 이해했습니다. </Button>
        </ButtonContainer>
      </Div>
      <Div id="18">
        <Inst>
          파트너가 어떤 복권을 선택했는지 맞혀 주세요. <br />
          지금부터는 정답을 알려주지 않습니다.
        </Inst>
        <GameInfo>
          게임의 후반부에는 파트너의 실제 선택을 알려주지 않는 게임이
          진행됩니다.
          <br />
        </GameInfo>
        <ButtonContainer>
          <Button onClick={handleNext}> 이해했습니다. </Button>
        </ButtonContainer>
      </Div>
      <Div id="19">
        <ImageCont>
          <PeopleImg style={partner1}></PeopleImg>
        </ImageCont>
        <Inst>
          위의 파트너가 어떤 복권을 선택했을 지 맞혀주세요 <br />
        </Inst>
        <GameInfo>
          파트너의 선택을 맞히기 전 <br />
          어떤 파트너에 대해 맞히면 되는지를 보여줍니다. <br />
        </GameInfo>
        <ButtonContainer>
          <Button onClick={handleNext}> 이해했습니다. </Button>
        </ButtonContainer>
      </Div>
      <Div id="20">
        <Cont2>
          <ImageCont>
            <LeftImg onClick={clickLeft} className="left"></LeftImg>
            <Middle style={partner1_small}></Middle>
            <RightImg className="right"></RightImg>
          </ImageCont>
        </Cont2>
        <GameInfo>
          두 복권 중 파트너가 어떤 것을 선택했는지 고르시면 됩니다. <br />
          왼쪽 복권을 클릭해보세요 <br />
        </GameInfo>
      </Div>
      <Div id="21">
        <Cont2>
          <ImageCont>
            <LeftImg className="left"></LeftImg>
            <Middle style={partner1_small}></Middle>
            <RightImg className="right"></RightImg>
          </ImageCont>
        </Cont2>
        <GameInfo>
          이제 아래의 다음 버튼을 누르면 선택이 확정되고 <br />
          실제로 파트너가 선택한 것이 무엇인지 정답을 확인 할 수 있습니다.{" "}
          <br />
        </GameInfo>
        <ButtonContainer>
          <Button onClick={handleNext}> 다음 </Button>
        </ButtonContainer>
      </Div>
      <Div id="22">
        <GameInfo>
          대신 방금 전의 선택이 정답인지 확실한 정도를 <br />
          슬라이더바를 이용해 응답해 주시면 됩니다. <br />
        </GameInfo>
        <Inst>정답을 맞혔을까요?</Inst>
        <Inst></Inst>
        <div className="slidecontainer">
          <RangeInput
            type="range"
            min="1"
            max="10"
            value="5"
            className="slider"
            id="myRange"
          ></RangeInput>
        </div>
        <RangeCont>
          <Inst2>
            <span role="img" aria-label="arrow">
              ←
            </span>{" "}
            전혀 확실하지 않다.
          </Inst2>
          <Inst>
            <span id="demo"></span>
          </Inst>
          <Inst2>
            확실히 맞혔을 것이다.
            <span role="img" aria-label="arrow">
              →
            </span>
          </Inst2>
        </RangeCont>
        <GameInfo>슬라이더바를 움직여보세요.</GameInfo>
        <ButtonContainer>
          <Button onClick={handleNext}> 다음 </Button>
        </ButtonContainer>
      </Div>
      <Div id="23">
        <Inst>
          방금의 연습처럼 정답을 알려주는 게임 여러 번, <br />
          정답을 알려주지 않는 게임 여러 번을 진행하게 됩니다. <br />
        </Inst>
        <ButtonContainer>
          <Button onClick={handleNext}> 이해했습니다. </Button>
        </ButtonContainer>
      </Div>
      <Div id="23">
        <Inst>
          두 번째 게임에서의 보너스는 <br />
          파트너의 선택을 맞힌 개수에 비례해서 지급됩니다. <br />
          <br />
          많이 맞힐 수록 더 많은 금액을 받으실 수 있습니다. <br />
        </Inst>
        <ButtonContainer>
          <Button onClick={handleNext}> 이해했습니다. </Button>
        </ButtonContainer>
      </Div>
      <Div id="24">
        <Inst>
          두 번째 게임이 끝나면 <br />
          게임을 함께 한 파트너들에 대한 간단한 설문을 하게 됩니다. <br />
          <br />
          귀하의 생각과 느낌에 따라 솔직하고 편안하게 응답해주세요. <br />
        </Inst>
        <ButtonContainer>
          <Button onClick={handleNext}> 이해했습니다. </Button>
        </ButtonContainer>
      </Div>
      <Div id="25">
        <Inst>
          여기까지가 두 번째 게임에 대한 설명입니다. <br />
          <br />
          이해하셨으면 ‘이해했습니다’ 버튼을 눌러주세요. <br />
          두 번째 본 게임이 곧 시작됩니다. <br />
        </Inst>
        <ButtonContainer>
          <Button onClick={repeat}> 설명문 다시 읽기. </Button>
          <Link to={`/${sub_id}/experiment2`}>
            <Button> 이해했습니다. </Button>
          </Link>
        </ButtonContainer>
      </Div>
    </Container>
  );
};

export default Exp1Presenter;
