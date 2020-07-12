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

const GameInfoRed = styled.div`
  padding: 18px;
  font-size: 20px;
  display: block;
  color: red;
  font-weight: 600;
  text-align: center;
  width: 100%;
  line-height: 40px;
`;

const GameInfo = styled.div`
  padding: 18px;
  font-size: 20px;
  display: block;
  color: black;
  font-weight: 600;
  text-align: center;
  width: 100%;
  line-height: 40px;
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
  font-size: 20px;
  font-weight: 900;
  box-shadow: 0px 1px 5px 2px rgba(140, 140, 140, 0.4);
`;

const Div = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
`;

export default class extends Component {
  state = { sub_id: "", step: 1 };

  handleNext = async () => {
    await this.setState({ step: this.state.step + 1 });
    if (this.state.step > 1) {
      document.getElementById(`${this.state.step - 1}`).style.display = "none";
      document.getElementById(`${this.state.step}`).style.display = "flex";
    }
  };

  componentDidMount = (async) => {
    const href = window.location.href.split("/");
    document.getElementById(`${this.state.step}`).style.display = "flex";
    let current_time = new Date();
    current_time = current_time.getTime().toString();
    this.setState({
      sub_id: href[href.length - 1] + current_time
    });
  };

  render = () => {
    return (
      <Container>
        <Div id="1">
          <GameInfo>
            안정적인 인터넷 연결망을 이용하여 실험을 진행 해주세요.
            <br />
          </GameInfo>
          <GameInfoRed>
            중간에 뒤로가기 또는 새로고침을 하시면
            <br />
            게임이 처음부터 다시 진행되며,
            <br />
            실험 참가비에 불이익이 있을 수 있습니다.
            <br />
          </GameInfoRed>
          <ButtonContainer>
            <Button onClick={this.handleNext}> 확인 </Button>
          </ButtonContainer>
        </Div>
        <Div id="2">
          <GameInfo>
            실험에 참가해주셔서 감사합니다. <br />
            <br />
            지금부터 선택에 따라 추가로 보너스 금액을 <br />
            받을 수 있는 복권 게임을 하게 됩니다. <br />
            게임에 대한 설명을 읽고 신중하게 선택해 주세요. <br />
          </GameInfo>
          <ButtonContainer>
            <Link to={`${this.state.sub_id}/explain1`}>
              <Button> 실험 설명 시작 </Button>
            </Link>
          </ButtonContainer>
        </Div>
      </Container>
    );
  };
}
