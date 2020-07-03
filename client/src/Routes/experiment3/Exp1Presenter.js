import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  width: 120px;
  height: 100px;
  margin: 10px;
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
const LoaderHide = styled.div`
  padding: 40px;
  width: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;
const Loader = styled.div`
  padding: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

const Exp1Presenter = ({
  sub_id,
  character,
  partner,
  partner_p,
  partner1,
  partner2,
  partner_s,
  bonus3,
  bonus1,
  bonus2,
  l_num,
  r_num,
  l_prob,
  r_prob,
  handleNext,
  clickLeft,
  clickRight
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
  return (
    <Container>
      <Div id="-3">
        <Inst>
          게임에 입장하는 중입니다.<br></br>
        </Inst>
        <Loader>
          <span role="img" aria-label="Loading">
            <i className="fas fa-spinner fa-spin"></i>
          </span>
        </Loader>
      </Div>
      <Div id="-2">
        <Inst>세 번째 게임에 입장했습니다.</Inst>
        <ImageCont>
          <PeopleImg
            style={{
              backgroundImage: `url(${require(`../../images/avatars/avatar_${character}.png`)})`
            }}
          ></PeopleImg>
        </ImageCont>
      </Div>
      <Div id="-1">
        <Inst>파트너들이 다시 입장했습니다.</Inst>
        <ImageCont>
          <PeopleImg2
            style={{
              backgroundImage: `url(${require(`../../images/avatars/avatar_${
                partner1 - partner_s
              }.png`)})`
            }}
          ></PeopleImg2>
          <PeopleImg
            style={{
              backgroundImage: `url(${require(`../../images/avatars/avatar_${character}.png`)})`
            }}
          ></PeopleImg>
          <PeopleImg2
            style={{
              backgroundImage: `url(${require(`../../images/avatars/avatar_${
                partner2 + partner_s
              }.png`)})`
            }}
          ></PeopleImg2>
        </ImageCont>
      </Div>
      <Div id="0">
        <Inst>
          지금부터 복권 게임을 시작합니다.
          <br></br>
        </Inst>
      </Div>
      <Div id="1-1">
        <ImageCont>
          <DoorImg
            style={{
              backgroundImage: `url(${require(`../../images/avatars/${partner_p}.png`)})`
            }}
          ></DoorImg>
        </ImageCont>
      </Div>
      <Div id="1-2">
        <WindowCont>
          <Window
            style={{
              backgroundImage: `url(${require(`../../images/avatars/small_avatar_${partner}.png`)})`
            }}
          ></Window>
        </WindowCont>
        <Cont2>
          <ImageCont>
            <LeftImg
              onClick={clickLeft}
              className="left"
              style={left_image}
            ></LeftImg>
            <Middle
              style={{
                backgroundImage: `url(${require(`../../images/avatars/small_avatar_${character}.png`)})`
              }}
            ></Middle>
            <RightImg
              onClick={clickRight}
              className="right"
              style={right_image}
            ></RightImg>
          </ImageCont>
        </Cont2>
        <LoaderHide id="loader">
          <span role="img" aria-label="Loading">
            <i className="fas fa-spinner fa-spin"></i>
          </span>
        </LoaderHide>
        <ButtonContainer id="hideNext">
          <Button onClick={handleNext}> 다음 </Button>
        </ButtonContainer>
      </Div>
      <Div id="1">
        <Inst>
          이번 선택들로 받을 보너스금액이<br></br>
          결정되었습니다.<br></br>
          <br></br>
        </Inst>
        <ButtonContainer>
          <Button onClick={handleNext}> 확인 </Button>
        </ButtonContainer>
      </Div>
      <Div id="2">
        <Inst>
          모든 게임이 끝났습니다.<br></br>
          보너스는 아래와 같이 정해졌습니다.<br></br>
          <br></br>
          게임1 - {bonus1}원 <br></br>
          게임2 - 정확도: {bonus2 / 3}%, {bonus2}원 <br></br>
          게임3 - {bonus3}원<br></br>
        </Inst>
        <ButtonContainer>
          <Button onClick={handleNext}> 확인 </Button>
        </ButtonContainer>
      </Div>
      <Div id="3">
        <Inst>
          실험이 종료되었습니다.<br></br>
          실험에 참가해주셔 감사합니다.<br></br>
        </Inst>
      </Div>
    </Container>
  );
};

export default Exp1Presenter;
