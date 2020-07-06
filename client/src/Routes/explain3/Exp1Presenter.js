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
const WindowCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const Window = styled.div`
  width: 100px;
  height: 80px;
  background-repeat: no-repeat;
  background-size: cover;
`;

const DoorImg = styled.div`
  width: 160px;
  height: 178.4px;
  background-repeat: no-repeat;
  background-size: cover;
`;
const PeopleImg = styled.div`
  width: 160px;
  height: 190px;
  background-repeat: no-repeat;
  background-size: cover;
`;
const PeopleImg2 = styled.div`
  width: 140px;
  height: 170px;
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

const Inst4 = styled.div`
  padding: 18px;
  font-size: 20px;
  display: block;
  color: black;
  text-align: right;
  width: 100%;
  position: absolute;
  right: 20%;
  top: 10px;
`;

const GameInfo = styled.div`
  padding: 18px;
  font-size: 20px;
  display: block;
  color: rgb(68, 114, 196);
  font-weight: 600;
  text-align: center;
  width: 100%;
  line-height: 30px;
`;

const GameInfo2 = styled.div`
  padding: 8px;
  font-size: 18px;
  display: block;
  color: rgb(68, 114, 196);
  font-weight: 400;
  text-align: center;
  width: 100%;
  line-height: 20px;
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
  sub_id,
  repeat,
  handleNext,
  clickLeft,
  clickRight,
  clickPeople
}) => {
  const people1 = {
    backgroundImage: `url(${require(`../../images/avatars/instruction/partner1.png`)})`
  };
  const people2 = {
    backgroundImage: `url(${require(`../../images/avatars/instruction/partner2.png`)})`
  };
  const people6 = {
    backgroundImage: `url(${require(`../../images/avatars/instruction/avataaars_inst6.png`)})`
  };
  const door1 = {
    backgroundImage: `url(${require(`../../images/avatars/instruction/partner1_door.png`)})`
  };
  const smallme = {
    backgroundImage: `url(${require(`../../images/avatars/instruction/self_small.png`)})`
  };
  const small1 = {
    backgroundImage: `url(${require(`../../images/avatars/instruction/partner1_small.png`)})`
  };
  const opendoor = {
    backgroundImage: `url(${require(`../../images/avatars/open_door.png`)})`
  };

  return (
    <Container>
      <Div id="1">
        <Inst>
          이제 곧 세 번째 복권 게임이 시작됩니다. <br />
          <br />
          세 번째 게임은 복권 게임으로 <br />
          선택에 따라 추가로 보너스 금액을 받을 수 있습니다. <br />
          <br />
          게임에 대한 설명을 읽고 신중하게 선택해 주세요. <br />
        </Inst>
        <ButtonContainer>
          <Button onClick={handleNext}> 실험 설명 시작 </Button>
        </ButtonContainer>
      </Div>
      <Div id="2">
        <Inst>
          이번 게임도 두 복권 중 귀하가 선호하는 하나를 선택하는 것으로 <br />
          두 번째 게임에서 함께하였던 파트너 두 명과 함께 진행됩니다 <br />
          <br />
          이번에는 파트너들이 당신의 선택을 확인하게 됩니다.
          <br />
        </Inst>
        <ButtonContainer>
          <Button onClick={handleNext}> 이해했습니다. </Button>
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
        <Inst4>예시 화면 입니다.</Inst4>
        <Inst>세 번째 게임에 입장했습니다.</Inst>
        <GameInfo>
          먼저 게임에 입장하여 파트너들이 다시 게임에 입장하기를 기다립니다.
        </GameInfo>
        <ImageCont>
          <PeopleImg style={people6}></PeopleImg>
        </ImageCont>
        <GameInfo>
          연습화면에서는 귀하가 선택하신 캐릭터 대신 임의의 캐릭터가 나옵니다.
        </GameInfo>
        <ButtonContainer>
          <Button onClick={handleNext}> 이해했습니다. </Button>
        </ButtonContainer>
      </Div>
      <Div id="5">
        <Inst4>예시 화면 입니다.</Inst4>
        <Inst>파트너들이 다시 입장했습니다.</Inst>
        <GameInfo>파트너들이 입장하고 나면 본 실험이 시작 됩니다.</GameInfo>
        <ImageCont>
          <PeopleImg2 style={people1}></PeopleImg2>
          <PeopleImg style={people6}></PeopleImg>
          <PeopleImg2 style={people2}></PeopleImg2>
        </ImageCont>
        <GameInfo>연습화면에서는 파트너가 실제와 다를 수 있습니다.</GameInfo>
        <ButtonContainer>
          <Button onClick={handleNext}> 이해했습니다. </Button>
        </ButtonContainer>
      </Div>
      <Div id="6">
        <Inst4>예시 화면 입니다.</Inst4>
        <ImageCont>
          <DoorImg style={door1}></DoorImg>
        </ImageCont>
        <GameInfo>
          복권이 나타나기 전, 귀하의 선택을 보게 될 파트너가 나타납니다. <br />
        </GameInfo>
        <ButtonContainer>
          <Button onClick={handleNext}> 이해했습니다. </Button>
        </ButtonContainer>
      </Div>
      <Div id="7">
        <Inst4>예시 화면 입니다.</Inst4>
        <WindowCont>
          <Window style={small1}></Window>
        </WindowCont>
        <Cont2>
          <ImageCont>
            <LeftImg className="left"></LeftImg>
            <Middle style={smallme}></Middle>
            <RightImg className="right"></RightImg>
          </ImageCont>
          <GameInfo2>
            두 개의 복권을 보여주는 화면입니다. <br />
            두 복권의 가운데에는 귀하의 캐릭터가 나타나고, <br />
            화면의 위쪽에는 파트너의 캐릭터가 나타납니다. <br />
          </GameInfo2>
        </Cont2>
        <ButtonContainer>
          <Button onClick={handleNext}> 이해했습니다. </Button>
        </ButtonContainer>
      </Div>
      <Div id="8">
        <Inst4>예시 화면 입니다.</Inst4>
        <WindowCont>
          <Window style={small1}></Window>
        </WindowCont>
        <Cont2>
          <ImageCont>
            <LeftImg onClick={clickLeft} className="left"></LeftImg>
            <Middle style={smallme}></Middle>
            <RightImg className="right"></RightImg>
          </ImageCont>
          <GameInfo2>
            두 개의 복권들 중에서 더 선호하는 하나를 선택하시면 됩니다. <br />
            왼쪽 복권을 클릭해보세요. <br />
            <br />
          </GameInfo2>
        </Cont2>
      </Div>
      <Div id="9">
        <Inst4>예시 화면 입니다.</Inst4>
        <WindowCont>
          <Window style={small1}></Window>
        </WindowCont>
        <Cont2>
          <ImageCont>
            <LeftImg onClick={clickLeft} className="left"></LeftImg>
            <Middle style={smallme}></Middle>
            <RightImg className="right"></RightImg>
          </ImageCont>
          <GameInfo2>
            이제 아래의 다음 버튼을 누르면 선택이 확정되고 <br />
            당신은 100%의 확률로 20 포인트를 받을 수 있습니다. <br />
            <br />
          </GameInfo2>
        </Cont2>
        <ButtonContainer>
          <Button onClick={handleNext}> 다음 </Button>
        </ButtonContainer>
      </Div>
      <Div id="10">
        <Inst4>예시 화면 입니다.</Inst4>
        <ImageCont>
          <DoorImg style={opendoor}></DoorImg>
        </ImageCont>
        <GameInfo>
          귀하의 선택을 볼 파트너가 아무도 입장하지 않을 수도 있습니다. <br />
          아무도 입장하지 않았다면 위와 같이 화면에 파트너가 나타나지 않습니다.
          <br />
        </GameInfo>
        <ButtonContainer>
          <Button onClick={handleNext}> 이해했습니다. </Button>
        </ButtonContainer>
      </Div>

      <Div id="11">
        <Inst4>예시 화면 입니다.</Inst4>
        <WindowCont>
          <Window></Window>
        </WindowCont>
        <Cont2>
          <ImageCont>
            <LeftImg className="left"></LeftImg>
            <Middle style={smallme}></Middle>
            <RightImg className="right"></RightImg>
          </ImageCont>
          <GameInfo2>
            두 개의 복권을 보여주는 화면입니다. <br />
            두 복권의 가운데에는 귀하의 캐릭터가 나타나고, <br />
            화면의 위쪽에는 캐릭터가 나타나지 않습니다. <br />
          </GameInfo2>
        </Cont2>
        <ButtonContainer>
          <Button onClick={handleNext}> 이해했습니다. </Button>
        </ButtonContainer>
      </Div>
      <Div id="12">
        <Inst4>예시 화면 입니다.</Inst4>
        <WindowCont>
          <Window></Window>
        </WindowCont>
        <Cont2>
          <ImageCont>
            <LeftImg className="left"></LeftImg>
            <Middle style={smallme}></Middle>
            <RightImg onClick={clickRight} className="right"></RightImg>
          </ImageCont>
          <GameInfo2>
            두 개의 복권들 중에서 더 선호하는 하나를 선택하시면 됩니다. <br />
            이번에는 오른쪽 복권을 클릭해보세요. <br />
            <br />
          </GameInfo2>
        </Cont2>
      </Div>
      <Div id="13">
        <Inst4>예시 화면 입니다.</Inst4>
        <WindowCont>
          <Window></Window>
        </WindowCont>
        <Cont2>
          <ImageCont>
            <LeftImg className="left"></LeftImg>
            <Middle style={smallme}></Middle>
            <RightImg className="right"></RightImg>
          </ImageCont>
          <GameInfo2>
            이제 아래의 다음 버튼을 누르면 선택이 확정되고 <br />
            당신은 25%의 확률로 34 포인트를, 75%로 0포인트를 받을 수 있습니다.
            <br />
            <br />
          </GameInfo2>
        </Cont2>
        <ButtonContainer>
          <Button onClick={handleNext}> 다음 </Button>
        </ButtonContainer>
      </Div>
      <Div id="14">
        <Inst>
          연습이 끝났습니다. <br />
          연습과 같은 과정을 여러 번 반복하게 됩니다. <br />
        </Inst>
        <ButtonContainer>
          <Button onClick={handleNext}> 이해했습니다. </Button>
        </ButtonContainer>
      </Div>
      <Div id="15">
        <Inst>
          이번 게임의 보너스는 <br />
          선택하신 모든 복권들 중 <br />
          무작위로 결정된 하나의 포인트와 확률에 비례하여 결정됩니다. <br />
          <br />
          포인트를 많이 받을수록 보너스 금액이 커집니다! <br />
        </Inst>
        <ButtonContainer>
          <Button onClick={handleNext}> 이해했습니다. </Button>
        </ButtonContainer>
      </Div>
      <Div id="16">
        <Inst>
          여기까지가 세 번째 게임에 대한 설명입니다 <br />
          <br />
          이해하셨으면 ‘이해했습니다’ 버튼을 눌러주세요. <br />
          세 번째 본 게임이 곧 시작됩니다. <br />
        </Inst>
        <ButtonContainer>
          <Button onClick={repeat}> 설명문 다시 읽기. </Button>
          <Link to={`/${sub_id}/experiment3`}>
            <Button> 이해했습니다. </Button>
          </Link>
        </ButtonContainer>
      </Div>
    </Container>
  );
};

export default Exp1Presenter;
