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
  background-repeat: no-repeat;
  background-size: cover;
  margin: 50px;
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

const Loader = styled.div`
  padding: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

const LoaderHide = styled.div`
  padding: 40px;
  width: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;
const Inst2 = styled.div`
  font-size: 15px;
  display: block;
  color: black;
  font-weight: 600;
  text-align: center;
  width: 100%;
  line-height: 40px;
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
  l_num,
  r_num,
  l_prob,
  r_prob,
  partner,
  partner1,
  partner2,
  bonus1,
  bonus2,
  handleNext,
  handle1Next,
  handle2Next,
  handle3Next,
  handle2Next2,
  clickLeft,
  clickRight,
  setCharBorder,
  clickPeople1,
  clickPeople2,
  clickPeople3,
  clickPeople4,
  clickPeople5,
  clickPeople6,
  predict
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
    backgroundImage: `url(${require(`../../images/avatars/avatar_1.png`)})`
  };
  const people2 = {
    backgroundImage: `url(${require(`../../images/avatars/avatar_2.png`)})`
  };
  const people3 = {
    backgroundImage: `url(${require(`../../images/avatars/avatar_3.png`)})`
  };
  const people4 = {
    backgroundImage: `url(${require(`../../images/avatars/avatar_4.png`)})`
  };
  const people5 = {
    backgroundImage: `url(${require(`../../images/avatars/avatar_5.png`)})`
  };
  const people6 = {
    backgroundImage: `url(${require(`../../images/avatars/avatar_6.png`)})`
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
        <Inst>게임에 함께 할 파트너를 기다리고 있습니다..</Inst>
        <ImageCont>
          <PeopleImg className="people1" style={people1}></PeopleImg>
          <PeopleImg className="people2" style={people2}></PeopleImg>
          <PeopleImg className="people3" style={people3}></PeopleImg>
          <PeopleImg className="people4" style={people4}></PeopleImg>
          <PeopleImg className="people5" style={people5}></PeopleImg>
          <PeopleImg className="people6" style={people6}></PeopleImg>
        </ImageCont>

        <Loader id="loader">
          <span role="img" aria-label="Loading">
            <i className="fas fa-spinner fa-spin"></i>
          </span>
        </Loader>
      </Div>
      <Div id="3">
        <Inst>
          파트너들이 입장하셨습니다.<br></br>
          <br></br>
          파트너가 어떤 캐릭터를 골랐는지는<br></br>
          보여드리지 않습니다.<br></br>
        </Inst>
      </Div>
      <Div id="4">
        <Inst>파트너들이 입장했습니다.</Inst>
        <ImageCont>
          <PeopleImg
            style={{
              backgroundImage: `url(${require(`../../images/avatars/avatar_${partner1}.png`)})`
            }}
          ></PeopleImg>
          <PeopleImg
            style={{
              backgroundImage: `url(${require(`../../images/avatars/avatar_${partner2}.png`)})`
            }}
          ></PeopleImg>
        </ImageCont>
      </Div>
      <Div id="5">
        <Inst>
          지금부터는 파트너가 어떤 복권을 <br></br>
          선택했는지 맞혀 주세요.<br></br>
          <br></br>곧 게임을 시작합니다.<br></br>
        </Inst>
      </Div>
      <Div id="1-1">
        <ImageCont>
          <PeopleImg
            style={{
              backgroundImage: `url(${require(`../../images/avatars/avatar_${partner}.png`)})`
            }}
          ></PeopleImg>
        </ImageCont>
        <Inst>위 파트너가 어떤 복권을 선택했을 지 맞혀주세요</Inst>
      </Div>
      <Div id="1-2">
        <Cont2>
          <ImageCont>
            <LeftImg
              onClick={clickLeft}
              className="left"
              style={left_image}
            ></LeftImg>
            <Middle
              style={{
                backgroundImage: `url(${require(`../../images/avatars/small_avatar_${partner}.png`)})`
              }}
            ></Middle>
            <RightImg
              onClick={clickRight}
              className="right"
              style={right_image}
            ></RightImg>
          </ImageCont>
        </Cont2>
        <LoaderHide id="loader1">
          <span role="img" aria-label="Loading">
            <i className="fas fa-spinner fa-spin"></i>
          </span>
        </LoaderHide>
        <ButtonContainer id="hideNext1">
          <Button onClick={handle1Next}> 다음 </Button>
        </ButtonContainer>
      </Div>
      <Div id="6">
        <Inst>
          파트너가 어떤 복권을 선택했는지 맞혀 주세요.<br></br>
          지금부터는 정답을 알려주지 않습니다.<br></br>
        </Inst>
      </Div>
      <Div id="2-1">
        <ImageCont>
          <PeopleImg
            style={{
              backgroundImage: `url(${require(`../../images/avatars/avatar_${partner}.png`)})`
            }}
          ></PeopleImg>
        </ImageCont>
        <Inst>위 파트너가 어떤 복권을 선택했을 지 맞혀주세요</Inst>
      </Div>
      <Div id="2-2">
        <Cont2>
          <ImageCont>
            <LeftImg
              onClick={clickLeft}
              className="left"
              style={left_image}
            ></LeftImg>
            <Middle
              style={{
                backgroundImage: `url(${require(`../../images/avatars/small_avatar_${partner}.png`)})`
              }}
            ></Middle>
            <RightImg
              onClick={clickRight}
              className="right"
              style={right_image}
            ></RightImg>
          </ImageCont>
        </Cont2>
        <ButtonContainer id="hide2Next2">
          <Button onClick={handle2Next2}> 다음 </Button>
        </ButtonContainer>
      </Div>
      <Div id="2-3">
        <Inst>정답을 맞혔을까요?</Inst>
        <Inst></Inst>
        <div className="slidecontainer">
          <RangeInput
            type="range"
            min="1"
            max="10"
            value={predict}
            className="slider"
            id="myRange"
          ></RangeInput>
        </div>
        <RangeCont>
          <Inst2>
            <span role="img" aria-label="arrow">
              ⬅️
            </span>{" "}
            전혀 확실하지 않다.
          </Inst2>
          <Inst>
            <span id="demo"></span>
          </Inst>
          <Inst2>
            확실히 맞혔을 것이다{" "}
            <span role="img" aria-label="arrow">
              ➡️
            </span>
          </Inst2>
        </RangeCont>
        <LoaderHide id="loader2">
          <span role="img" aria-label="Loading">
            <i className="fas fa-spinner fa-spin"></i>
          </span>
        </LoaderHide>
        <ButtonContainer id="hideNext2">
          <Button onClick={handle2Next}> 다음 </Button>
        </ButtonContainer>
      </Div>
      <Div id="7">
        <Inst>
          지금부터는 파트너에 대한 <br></br>
          질문에 대답해주세요. <br></br>
        </Inst>
      </Div>

      <Div id="3-1">
        <ImageCont>
          <PeopleImg
            style={{
              backgroundImage: `url(${require(`../../images/avatars/avatar_${partner1}.png`)})`
            }}
          ></PeopleImg>
        </ImageCont>
        <Inst>위의 파트너에 대한 질문입니다.</Inst>
      </Div>
      <Div id="3-2">
        <ImageCont>
          <PeopleImg
            style={{
              backgroundImage: `url(${require(`../../images/avatars/avatar_${partner1}.png`)})`
            }}
          ></PeopleImg>
        </ImageCont>
        <Inst id="question"></Inst>
        <div className="slidecontainer">
          <RangeInput
            type="range"
            min="-10"
            max="10"
            value={predict}
            className="slider"
            id="myRange2"
          ></RangeInput>
        </div>
        <RangeCont>
          <Inst2>
            <span role="img" aria-label="arrow">
              ⬅️
            </span>{" "}
            매우 그렇지 않다
          </Inst2>
          <Inst>
            <span id="demo2"></span>
          </Inst>
          <Inst2>
            매우 그렇다{" "}
            <span role="img" aria-label="arrow">
              ➡️
            </span>
          </Inst2>
        </RangeCont>
        <LoaderHide id="loader3">
          <span role="img" aria-label="Loading">
            <i className="fas fa-spinner fa-spin"></i>
          </span>
        </LoaderHide>
        <ButtonContainer id="hideNext3">
          <Button onClick={handle3Next}> 다음 </Button>
        </ButtonContainer>
      </Div>
      <Div id="3-3">
        <ImageCont>
          <PeopleImg
            style={{
              backgroundImage: `url(${require(`../../images/avatars/avatar_${partner2}.png`)})`
            }}
          ></PeopleImg>
        </ImageCont>
        <Inst>위의 파트너에 대한 질문입니다.</Inst>
      </Div>
      <Div id="3-4">
        <ImageCont>
          <PeopleImg
            style={{
              backgroundImage: `url(${require(`../../images/avatars/avatar_${partner2}.png`)})`
            }}
          ></PeopleImg>
        </ImageCont>
        <Inst id="question2"></Inst>
        <div className="slidecontainer">
          <RangeInput
            type="range"
            min="-10"
            max="10"
            value={predict}
            className="slider"
            id="myRange3"
          ></RangeInput>
        </div>
        <RangeCont>
          <Inst2>
            <span role="img" aria-label="arrow">
              ⬅️
            </span>{" "}
            매우 그렇지 않다
          </Inst2>
          <Inst>
            <span id="demo3"></span>
          </Inst>
          <Inst2>
            매우 그렇다{" "}
            <span role="img" aria-label="arrow">
              ➡️
            </span>
          </Inst2>
        </RangeCont>
        <LoaderHide id="loader4">
          <span role="img" aria-label="Loading">
            <i className="fas fa-spinner fa-spin"></i>
          </span>
        </LoaderHide>
        <ButtonContainer id="hideNext4">
          <Button onClick={handle3Next}> 다음 </Button>
        </ButtonContainer>
      </Div>

      <Div id="8">
        <Inst>
          이번 선택들로 받을 보너스금액이<br></br>
          결정되었습니다.<br></br>
          <br></br>
          최종 보너스금액은 모든 실험이 종료된 후 알려드립니다.<br></br>
        </Inst>
        <ButtonContainer>
          <Link to={`/${sub_id}/explain3`}>
            <Button> 확인 </Button>
          </Link>
        </ButtonContainer>
      </Div>

      <Div id="9">
        <Inst>
          이번 선택들로 받을 보너스금액이<br></br>
          결정되었습니다.<br></br>
          <br></br>
        </Inst>
        <ButtonContainer>
          <Button onClick={handleNext}> 확인 </Button>
        </ButtonContainer>
      </Div>
      <Div id="10">
        <Inst>
          모든 게임이 끝났습니다.<br></br>
          보너스는 아래와 같이 정해졌습니다.<br></br>
          <br></br>
          게임1 - {bonus1}원 <br></br>
          게임2 - 정확도: {(bonus2 / 3).toFixed(2)}%, {bonus2}원 <br></br>
        </Inst>
        <ButtonContainer>
          <Button onClick={handleNext}> 확인 </Button>
        </ButtonContainer>
      </Div>
      <Div id="11">
        <Inst>
          실험이 종료되었습니다.<br></br>
          실험에 참가해주셔 감사합니다.<br></br>
        </Inst>
      </Div>
    </Container>
  );
};

export default Exp1Presenter;
