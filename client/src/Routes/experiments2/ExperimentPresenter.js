import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  line-height: 20px;
  text-align: center;
`;

const BotPointCont = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const BotPoint = styled.div`
  border: medium groove white;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  padding: 10px;
`;

const SubPointCont = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

const SubPoint = styled.div`
  border: medium groove white;
  width: 50%;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  padding: 10px;
  text-align: center;
`;

const Round = styled.div`
  padding: 10px;
  display: block;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
`;

const FormContCont = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const FormContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const ButtonContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const Submit = styled.button`
  width: 150px;
  padding: 10px 5px;
  background-color: #ffcc00;
  border-radius: 8px;
  border-style: none;
  color: black;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
`;

const Extra = styled.div`
  margin-top: 10px;
  text-align: left;
  display: block;
  padding: 10px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 15px;
  line-height: 20px;
`;

const Loader = styled.div`
  padding: 40px;
  width: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;
const Yellow = styled.span`
  color: #ffcc00;
  font-weight: 500;
`;

const QuestionPresenter = ({
  sub_id,
  decision_sub,
  decision_bot1,
  decision_bot2,
  remain_sub,
  remain_bot1,
  remain_bot2,
  rank_sub,
  rank_bot1,
  rank_bot2,
  handleGoSubmit,
  handleSwerveSubmit
}) => (
  <Container>
    <Round>ROUND 2</Round>
    <BotPointCont>
      <BotPoint>
        <h4>
          BOT 1 Rank: <Yellow>{rank_bot1}</Yellow>
        </h4>
        <h4>
          BOT 1 Points: <Yellow>{remain_bot1}</Yellow>
        </h4>
        <h4>
          Previous Decision: <Yellow>{decision_bot1}</Yellow>
        </h4>
      </BotPoint>
      <BotPoint>
        <h4>
          BOT 2 Rank: <Yellow>{rank_bot2}</Yellow>
        </h4>
        <h4>
          BOT 2 Points: <Yellow>{remain_bot2}</Yellow>
        </h4>
        <h4>
          Previous Decision: <Yellow>{decision_bot2}</Yellow>
        </h4>
      </BotPoint>
    </BotPointCont>
    <SubPointCont>
      <SubPoint>
        <h4>
          YOUR Rank: <Yellow>{rank_sub}</Yellow>
        </h4>
        <h4>
          YOUR Points: <Yellow>{remain_sub}</Yellow>
        </h4>
        <h4>
          Previous Decision: <Yellow>{decision_sub}</Yellow>
        </h4>
      </SubPoint>
    </SubPointCont>
    <Loader id="loader">
      <span role="img" aria-label="Loading">
        <i className="fas fa-spinner fa-spin"></i>
      </span>
    </Loader>
    <FormContCont id="hideSubmit">
      <FormContainer>
        <Form onSubmit={handleGoSubmit}>
          <ButtonContainer>
            <Submit type="submit" value="GO" name="decision_sub">
              GO
            </Submit>
          </ButtonContainer>
        </Form>
        <Form onSubmit={handleSwerveSubmit}>
          <ButtonContainer>
            <Submit type="submit" value="SWERVE" name="decision_sub">
              SWERVE
            </Submit>
          </ButtonContainer>
        </Form>
      </FormContainer>
    </FormContCont>
    <Extra>
      If you choose "Go", and others also choose "Go" => you get -100, others
      also get -100 <br></br>
      If you choose "Go", and one choose "Go" and the other choose "Swerve" =>
      "Go" people get -60, "Swerve": -20 <br></br>
      If you choose "Go", and others choose "Swerve" => you get +20, others get
      -20 <br></br>
      If you choose "Swerve", and others also choose "Swerve" => All get 0
      points<br></br>
      If you choose "Swerve", and one choose "Go" and the other choose "Swerve"
      => "Go" people get +20, "Swerve" : -60 <br></br>
      If you choose "Swerve", and others choose "Go" => you get -20, others get
      -60 <br></br>
    </Extra>
  </Container>
);

export default QuestionPresenter;
