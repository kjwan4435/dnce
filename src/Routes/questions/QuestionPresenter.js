import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const Container = styled.div`
  padding: 20px;
`;

const UserInfo = styled.div`
  padding: 20px;
  display: block;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
`;

const Quest = styled.div``;

const Form_ = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Info = styled.input`
  width: 300px;
  padding: 10px 5px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  border-style: none;
  color: black;
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 20px;
`;

const Select = styled.select`
  width: 300px;
  padding: 10px 5px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  border-style: none;
  color: black;
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 20px;
`;

const Submit = styled.button`
  width: 300px;
  padding: 10px 5px;
  background-color: #ffcc00;
  border-radius: 8px;
  border-style: none;
  color: black;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
`;

const Button_Container = styled.div`
  text-align: center;
`;

const QuestionPresenter = ({
  age,
  sex,
  country,
  chickenGame,
  handleChange,
  handleSubmit,
}) => (
  <Container>
    <UserInfo>Let me know who you are!</UserInfo>
    <Form_ onSubmit={handleSubmit}>
      <Quest>
        <Info
          required
          placeholder="Age"
          onChange={handleChange}
          value={age}
          name="age"
        ></Info>
      </Quest>
      <Quest>
        <Info
          required
          placeholder="Country"
          onChange={handleChange}
          value={country}
          name="country"
        ></Info>
      </Quest>
      <Quest>
        <Select
          required
          placeholder="Male/Female"
          onChange={handleChange}
          value={sex}
          name="sex"
        >
          <option>Select your gender</option>
          <option>Male</option>
          <option>Female</option>
        </Select>
      </Quest>
      <Quest>
        <Select
          required
          placeholder="Have you heard about chicken game?"
          onChange={handleChange}
          value={chickenGame}
          name="chickenGame"
        >
          <option>Have you heard about chicken game?</option>
          <option>Yes</option>
          <option>No</option>
        </Select>
      </Quest>
      <Button_Container>
        <Submit type="submit">Game Start</Submit>
      </Button_Container>
    </Form_>
  </Container>
);

QuestionPresenter.propTypes = {
  age: PropTypes.number.isRequired,
  sex: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  chickenGame: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default QuestionPresenter;
