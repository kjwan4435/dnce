import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import middle from "../../images/focus_I.png";

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
  margin: 10px;
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

const Exp1Presenter = ({
  sub_id,
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
      <Div id="0">
        <Inst>
          지금부터 복권 게임을 시작합니다. <br />
        </Inst>
      </Div>
      <Div id="1">
        <Cont2>
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
        </Cont2>
        <Inst>
          원하는 복권을 선택하세요. <br />
        </Inst>
        <LoaderHide id="loader">
          <span role="img" aria-label="Loading">
            <i className="fas fa-spinner fa-spin"></i>
          </span>
        </LoaderHide>
        <ButtonContainer id="hideNext">
          <Button onClick={handleNext}> 다음 </Button>
        </ButtonContainer>
      </Div>
      <Div id="2">
        <Inst>
          이번 선택들로 받을 보너스금액이
          <br />
          결정되었습니다.
          <br />
          <br />
          최종 보너스금액은 모든 실험이 종료된 후 알려드립니다.
          <br />
        </Inst>
        <ButtonContainer>
          <Link to={`/${sub_id}/explain2`}>
            <Button> 확인 </Button>
          </Link>
        </ButtonContainer>
      </Div>
    </Container>
  );
};

export default Exp1Presenter;
